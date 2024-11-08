<template>
  <div class="bacground">
    <div id="app">
    <vue-particles
        id="tsparticles"
        @particles-loaded="particlesLoaded"
        :options="{
            background: {
                color: {
                    value: '' // Deep blue background color
                }
            },
            fpsLimit: 60,
            interactivity: {
                events: {
                    onClick: {
                        enable: true,
                        mode: 'remove'
                    },
                    onHover: {
                        enable: true,
                        mode: 'connect'
                    }
                },
                modes: {
                    remove: {
                        quantity: 5
                    },
                    connect: {
                        distance: 100,
                        lineLinked: {
                            opacity: 0.7
                        },
                        radius: 150
                    }
                }
            },
            particles: {
                color: {
                    value: ['#ff6f61', '#ffe156', '#6a0572'] 
                },
                links: {
                    color: '#ffffff',
                    distance: 100,
                    enable: true,
                    opacity: 0.3,
                    width: 1
                },
                move: {
                    direction: 'top',
                    enable: true,
                    outModes: 'out',
                    random: true,
                    speed: 2,
                    straight: false
                },
                number: {
                    density: {
                        enable: true,
                        area: 800
                    },
                    value: 50
                },
                opacity: {
                    value: { min: 0.3, max: 0.8 },
                    animation: {
                        enable: true,
                        speed: 1,
                        minimumValue: 0.3,
                        sync: false
                    }
                },
                shape: {
                    type: ['circle', 'triangle', 'polygon', 'square', 'star'], // Added 'square' shape
                    polygon: {
                        sides: 5
                    }
                },
                size: {
                    value: { min: 2, max: 6 },
                    animation: {
                        enable: true,
                        speed: 3,
                        minimumValue: 2,
                        sync: false
                    }
                },
                // Adding small squares specifically
                smallSquares: {
                    color: {
                        value: '#fff'
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800
                        },
                        value: 30 // Number of small squares
                    },
                    size: {
                        value: { min: 1, max: 3 } // Smaller size for squares
                    },
                    shape: {
                        type: 'square'
                    },
                    move: {
                        enable: true,
                        speed: 0.5,
                        direction: 'none',
                        outModes: 'out'
                    },
                    opacity: {
                        value: 0.5
                    }
                }
            },
            detectRetina: true
        }"
    />
</div>



</div>



</template>

<script>
export default {
  
  name: 'BackgroundBox',
  setup() {
    const particlesLoaded = async container => {
      console.log("Particles container loaded", container);
    };
    return {
      particlesLoaded
    };
  }
};
</script>
