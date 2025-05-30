﻿import React, { useEffect, useRef, useState } from 'react';
import OpenSeadragon from 'openseadragon';
import './Projects.css';
import { Link } from 'react-router-dom';

// Define your image sources and associated patient info
const tileSources = [
    {
        name: 'deepzoom3',
        width: 149233,
        height: 51097,
        patient: {
            name: 'Jane Smith',
            id: 'P5678',
            note: 'Routine check. No irregularities found.'
        }
    },
    {
        name: 'deepzoom4',
        width: 120742,
        height: 30124,
        patient: {
            name: 'Alice Müller',
            id: 'P9012',
            note: 'Biopsy needed for lower region.'
        }
    },
    {
        name: 'deepzoom5',
        width: 187024,
        height: 80181,
        patient: {
            name: 'Bob Lee',
            id: 'P3456',
            note: 'Follow-up scheduled in 6 months.'
        }
    },
    {
        name: 'deepzoom6',
        width: 35862,
        height: 39819,
        patient: {
            name: 'New Patient',
            id: 'P6789',
            note: 'Initial scan under review.'
        }
    }
].map(s => ({
    ...s,
    thumbnail: `http://localhost:5003/tile/${s.name}_files/12/0_0.jpg`
}));

export default function DeepZoomViewer() {
    const viewerRef = useRef(null);
    const osdViewer = useRef(null);
    const [selected, setSelected] = useState(tileSources[0]);

    const buildDzConfig = ({
        name,
        width,
        height,
        tileSize = 512,
        overlap = 1,
        format = 'jpg'
    }) => ({
        width,
        height,
        tileSize,
        tileOverlap: overlap,
        tileFormat: format,
        minLevel: 0,
        getTileUrl: (level, x, y) =>
            `http://localhost:5003/tile/${name}_files/${level}/${x}_${y}.${format}`
    });

    // Initialize viewer
    useEffect(() => {
        if (viewerRef.current && !osdViewer.current) {
            osdViewer.current = OpenSeadragon({
                element: viewerRef.current,
                prefixUrl: '/openseadragon/images/',
                tileSources: buildDzConfig(selected),
                showNavigator: true,
                navigatorSizeRatio: 0.2,
                navigatorPosition: 'TOP_RIGHT',
                immediateRender: true,
                renderWhilePanning: true,
                blendTime: 0.1,
                animationTime: 0.5,
                maxZoomPixelRatio: 2,
                visibilityRatio: 0.6,
                constrainDuringPan: false,
                maxImageCacheCount: 200,
                minImageCacheCount: 50
            });
        }

        return () => {
            if (osdViewer.current) {
                osdViewer.current.destroy();
                osdViewer.current = null;
            }
        };
    }, []);

    // Change source on selection
    useEffect(() => {
        if (osdViewer.current) {
            osdViewer.current.open(buildDzConfig(selected));
        }
    }, [selected]);

    return (
        <div className="deepzoom-container " >
            <li className="patview-link"><Link className="nav-link" style={{ fontFamily: "'Playfair Display', serif" }} to="/">Patview</Link></li>

            {/* Deep Zoom viewer */}
            <div id="openseadragon1" ref={viewerRef} className="deepzoom-viewer" />

            {/* Thumbnails */}
            <div className="thumbnails">
                {tileSources.map(source => (
                    <div key={source.name} className="thumb-container">
                        <img
                            src={source.thumbnail}
                            alt={source.name}
                            className={`thumb ${source.name === selected.name ? 'active' : ''}`}
                            onClick={() => setSelected(source)}
                        />
                        <button
                            onClick={() => {
                                window.open(`/viewer/${source.name}`, '_blank', 'noopener,noreferrer');
                            }}
                            className="open-button"
                        >
                            🔍
                        </button>
                    </div>
                ))}
            </div>

            {/* Patient Information Editor */}
            <div className="patient-info">
                <h3>Patient Information</h3>
                <label>
                    Name:
                    <input
                        type="text"
                        value={selected.patient.name}
                        onChange={e =>
                            setSelected({
                                ...selected,
                                patient: { ...selected.patient, name: e.target.value }
                            })
                        }
                    />
                </label>
                <label>
                    Patient ID:
                    <input
                        type="text"
                        value={selected.patient.id}
                        onChange={e =>
                            setSelected({
                                ...selected,
                                patient: { ...selected.patient, id: e.target.value }
                            })
                        }
                    />
                </label>
                <label>
                    Notes:
                    <textarea
                        value={selected.patient.note}
                        onChange={e =>
                            setSelected({
                                ...selected,
                                patient: { ...selected.patient, note: e.target.value }
                            })
                        }
                    />
                </label>
                <button onClick={() => alert('Changes saved (illustration only)')} className="save-button">
                    💾 Save
                </button>
                <div className="date">
                    Date:{" "}
                    {new Date().toLocaleDateString('no-NO', {
                        weekday: 'short',
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric'
                    })}
                </div>
            </div>
        </div>
    );
}
