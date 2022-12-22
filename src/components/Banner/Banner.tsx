import { useCallback } from "react";
import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-particles";
import { loadFull } from "tsparticles";

function Banner() {
    const particlesInit = useCallback(async (engine: Engine) => {
        console.log(engine);

        // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container: Container | undefined) => {
        await console.log(container);
    }, []);

    return (
        <>
            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={{
                    "fullScreen": {
                        "zIndex": -1
                    },
                    "particles": {
                        "number": {
                            "value": 80,
                            "density": {
                                "enable": true,
                                "area": 800
                            }
                        },
                        "color": {
                            "value": "#ff0000",
                            "animation": {
                                "enable": true,
                                "speed": 20,
                                "sync": true
                            }
                        },
                        "opacity": {
                            "value": 0.5
                        },
                        "size": {
                            "value": {
                                "min": 0.1,
                                "max": 3
                            }
                        },
                        "links": {
                            "enable": true,
                            "distance": 100,
                            "color": "#ffffff",
                            "opacity": 0.4,
                            "width": 1
                        },
                        "move": {
                            "enable": true,
                            "speed": 6,
                            "direction": "none",
                            "outModes": {
                                "default": "out"
                            }
                        }
                    },
                    "interactivity": {
                        "events": {
                            "onHover": {
                                "enable": true,
                                "mode": "repulse"
                            },
                            "onClick": {
                                "enable": true,
                                "mode": "push"
                            }
                        },
                        "modes": {
                            "repulse": {
                                "distance": 200
                            },
                            "push": {
                                "quantity": 4
                            }
                        }
                    },
                    "background": {
                        "color": "#000000"
                    }
                }}
            />
        </>
    )
}

export default Banner;