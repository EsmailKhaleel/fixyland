import { useState } from "react";
import {
    APIProvider,
    Map,
    AdvancedMarker,
    Pin,
    InfoWindow,
} from "@vis.gl/react-google-maps";
function GoogleMap() {
    const [position, setPosition] = useState({ lat: 53.54, lng: 10 });
    const [infoWindow, setInfoWindow] = useState(false);

    // Get user's location when component mounts
    useState(() => {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setPosition({
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    });
                },
                (error) => {
                    console.error("Error getting location:", error);
                }
            );
        } else {
            console.log("Geolocation is not supported by this browser.");
        }
    }, []);

    return (
        <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
            <div className="w-full h-full min-h-[500px] max-h-[700px] rounded-lg overflow-hidden">
                <Map
                    mapId="8e0a97af9386fef"
                    zoom={9}
                    center={position}
                >
                    <AdvancedMarker position={position} onClick={() => setInfoWindow(true)}>
                        <Pin
                            glyphColor={"white"}
                            glyph={"Our Office"}
                            scale={1.5}
                        />
                        {infoWindow && (
                            <InfoWindow
                                position={position}
                                onCloseClick={() => setInfoWindow(false)}
                            >
                                <div className="p-4 min-w-[200px]">
                                    <h3 className="text-lg font-bold text-primary mb-2">Fixyland Office</h3>
                                    <p className="text-gray-600 mb-2">Main Branch</p>
                                    <div className="flex items-center gap-2 text-sm text-gray-500">
                                        <span>📍</span>
                                        <span>Mansoura Street, Mansoura, Egypt</span>
                                    </div>
                                </div>
                            </InfoWindow>
                        )}
                    </AdvancedMarker>
                </Map>
            </div>
        </APIProvider>
    )
}

export default GoogleMap