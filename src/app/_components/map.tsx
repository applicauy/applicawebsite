"use client";

import { ComposableMap, Geographies, Geography } from "react-simple-maps";

const GEO_URL =
    "https://gist.githubusercontent.com/Pegasus8/95dbe58b6a69c3d99f519c21ebdf4cae/raw/437ebfbe589234e7c2ef58495d188fe29c09a92e/america.geojson";

// First try to implement a simple map using react-simple-maps. It doesn't work at the moment.
export default function Map() {
    return (
        <div>
            <ComposableMap>
                <Geographies geography={GEO_URL}>
                    {({ geographies }) =>
                        geographies.map((geo) => {
                            console.log(geo);

                            return (
                                <Geography key={geo.rsmKey} geography={geo} />
                            );
                        })
                    }
                </Geographies>
            </ComposableMap>
        </div>
    );
}
