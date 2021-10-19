import React from "react";
import Particles from "react-tsparticles";

export default function Leaves() {
    return (
        <Particles
                options={{
                background: {
                    color: {
                    value: "#ffffff"
                    }
                },
                fullScreen: {
                    enable: true,
                    zIndex: -1
                },
                interactivity: {
                    detectsOn: "window"
                },
                emitters: {
                    position: {
                    x: 50,
                    y: 20
                    },
                    rate: {
                    quantity: 5,
                    delay: 0.70
                    }
                },
                particles: {
                    move: {
                    decay: 0.05,
                    direction: "top",
                    enable: true,
                    gravity: {
                        enable: true,
                        maxSpeed: 50
                    },
                    outModes: {
                        top: "none",
                        default: "destroy"
                    },
                    speed: { min: 5, max: 20 }
                    },
                    number: {
                    value: 0,
                    },
                    opacity: {
                    value: 1
                    },
                    rotate: {
                    value: {
                        min: 0,
                        max: 360
                    },
                    direction: "random",
                    animation: {
                        enable: true,
                        speed: 10
                    }
                    },
                    tilt: {
                    direction: "random",
                    enable: true,
                    value: {
                        min: 0,
                        max: 360
                    },
                    animation: {
                        enable: true,
                        speed: 20
                    }
                    },
                    size: {
                    value: 4
                    },
                    roll: {
                    darken: {
                        enable: false,
                        value: 1
                    },
                    enable: false,
                    speed: {
                        min: 5,
                        max: 15
                    }
                    },
                    wobble: {
                    distance: 30,
                    enable: true,
                    speed: {
                        min: -7,
                        max: 7
                    }
                    },
                    shape: {
                    type: ["image"],
                    options: {
                        image: [
                        {
                            src: "https://i.postimg.cc/PxcXqH7Z/green-leaf.png",
                            width: 32,
                            height: 32,
                            particles: {
                            size: {
                                value: 16
                            }
                            }
                        }
                        ]
                        // character: [
                        //   {
                        //     fill: true,
                        //     font: "Verdana",
                        //     value: ["🍃"],
                        //     style: "",
                        //     weight: 400
                        //   }
                        // ]
                    }
                    }
                }
                }}
            />

      );
    }