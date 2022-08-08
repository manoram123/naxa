import React, { useState, useEffect, useRef } from 'react';
import { Map, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import 'ol/ol.css';
import XYZ from 'ol/source/XYZ';
import VectorTileLayer from 'ol/layer/VectorTile';
import VectorTileSource from 'ol/source/VectorTile';
import TileGrid from 'ol/tilegrid/TileGrid';
import MVT from 'ol/format/MVT';
import { get as getProjection, transform } from 'ol/proj';
import LayerGroup from 'ol/layer/Group';


function NewMap() {
    const [map, setMap] = useState();
    const mapElement = useRef();
    const mapRef = useRef();
    mapRef.current = map;

    const [layer, setLayer] = useState("province")

    const resolutions = [];
    for (let i = 0; i <= 8; ++i) {
        resolutions.push(156543.03392804097 / Math.pow(2, i * 2));
    }

    function tileUrlFunctionA(tileCoord) {
        return (
            `https://vectortile.naxa.com.np/federal/province.mvt/?tile={z}/{x}/{y}`)
            .replace('{z}', String(tileCoord[0] * 2 - 1))
            .replace('{x}', String(tileCoord[1]))
            .replace('{y}', String(tileCoord[2]))
            .replace(
                '{a-d}',
                'abcd'.substr(((tileCoord[1] << tileCoord[0]) + tileCoord[2]) % 4, 1)
            );
    }
    function tileUrlFunctionB(tileCoord) {
        return (
            `https://vectortile.naxa.com.np/federal/district.mvt/?tile={z}/{x}/{y}`)
            .replace('{z}', String(tileCoord[0] * 2 - 1))
            .replace('{x}', String(tileCoord[1]))
            .replace('{y}', String(tileCoord[2]))
            .replace(
                '{a-d}',
                'abcd'.substr(((tileCoord[1] << tileCoord[0]) + tileCoord[2]) % 4, 1)
            );
    }
    function tileUrlFunctionC(tileCoord) {
        return (
            `https://vectortile.naxa.com.np/federal/municipality.mvt/?tile={z}/{x}/{y}`)
            .replace('{z}', String(tileCoord[0] * 2 - 1))
            .replace('{x}', String(tileCoord[1]))
            .replace('{y}', String(tileCoord[2]))
            .replace(
                '{a-d}',
                'abcd'.substr(((tileCoord[1] << tileCoord[0]) + tileCoord[2]) % 4, 1)
            );
    }

    const baseLayer = new TileLayer({
        title: "base",
        source: new XYZ({ url: 'https://api.maptiler.com/maps/openstreetmap/{z}/{x}/{y}.jpg?key=A195qTayfZT9T3TORd9G', attributions: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>' }),
    })

    const provinceLayer = new VectorTileLayer({
        title: "province",
        visible: true,
        source: new VectorTileSource({
            format: new MVT(),
            tileGrid: new TileGrid({
                extent: getProjection('EPSG:3857').getExtent(),
                resolutions: resolutions,
                tileSize: 512,
            }),
            tileUrlFunction: tileUrlFunctionA,
        }),
    })
    const districtLayer = new VectorTileLayer({
        title: "district",
        visible: false,
        source: new VectorTileSource({
            format: new MVT(),
            tileGrid: new TileGrid({
                extent: getProjection('EPSG:3857').getExtent(),
                resolutions: resolutions,
                tileSize: 512,
            }),
            tileUrlFunction: tileUrlFunctionB,
        }),
    })
    const municipalityLayer = new VectorTileLayer({
        title: "municipality",
        visible: false,
        source: new VectorTileSource({
            format: new MVT(),
            tileGrid: new TileGrid({
                extent: getProjection('EPSG:3857').getExtent(),
                resolutions: resolutions,
                tileSize: 512,
            }),
            tileUrlFunction: tileUrlFunctionC,
        }),
    })


    var allLayers = new LayerGroup({layers: [baseLayer, provinceLayer, districtLayer, municipalityLayer]})

    const initMap = () => {
        const initialMap = new Map({
            target: mapElement.current,
            layers: allLayers,
            view: new View({
                center: transform([85.300140, 27.700769], 'EPSG:4326', 'EPSG:3857'),
                zoom: 7,
            }),
        });
        setMap(initialMap);
    }

    useEffect(() => {
        initMap()
    }, []);

    const changeLayer = (type) => {
        allLayers.getLayers().forEach(function(ele, ind, arr){
            console.log(ele.get('title'))
            const layer = ele.get('title')
            if(layer === type){
                console.log("lol")
                ele.setVisible()
            }
        })
    }

    return (
        <div style={{ height: '100vh', width: '100%' }} ref={mapElement} className="map-container">
            <div className='switcher'>
                <button onClick={changeLayer.bind(this, "province")} className='btn p-0 mx-2'>
                    <img className='img img-thumbnail demo' style={{ objectFit: "cover", height: "8ch", width: "10ch" }} src={'/assets/province.png'} alt="" />
                    <p className='text-start fw-bold mb-0'>Province</p>
                </button>
                <button onClick={changeLayer.bind(this, "district")} className='btn p-0 mx-2'>
                    <img className='img img-thumbnail demo' style={{ objectFit: "cover", height: "8ch", width: "10ch" }} src={'/assets/district.png'} alt="" />
                    <p className='text-start fw- mb-0'>District</p>
                </button>
                <button onClick={changeLayer.bind(this, "municipality")} className='btn p-0 mx-2'>
                    <img className='img img-thumbnail demo' style={{ objectFit: "cover", height: "8ch", width: "10ch" }} src={'/assets/municipality.png'} alt="" />
                    <p className='text-start fw-bold mb-0'>Municipality</p>
                </button>
            </div>
        </div>
    );
}

export default NewMap;