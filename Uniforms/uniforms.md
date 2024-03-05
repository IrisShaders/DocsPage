# Unifrom Information
This file outlines the uses of each uniform in Iris.


## Uniforms
| **Name** |                         **Usage**                         |
|:----------------:|:-----------------------------------------------------------:|
|`uniform float frameTimeCounter;`|run time in seconds, reset at 3600|
|`uniform float frameTime;`|last frame time in seconds|
|`uniform int frameCounter;`|frame index 0 to 720719|
|`uniform int moonPhase;`|phase of moon, 0-7|
|`uniform int worldDay;`|worldTicks % 24000|
|`uniform int worldTime;`|worldTicks / 24000|
|`uniform vec3 skyColor;`|color of sky in rgb|
|`uniform vec3 fogColor;`|color of fog in rgb|
|`uniform float fogDensity;`|normalised (0-1) fog density|
|`uniform int fogMode;`|GL_LINEAR or GL_EXP or GL_EXP2, used for fog mode|
|`uniform int heldItemId;`|id of item in main hand|
|`uniform int heldItemId2;`|id of item in off hand|
|`uniform int heldBlockLightValue;`|light value of main hand|
|`uniform int heldBlockLightValue2;`|light value of off hand|
|`uniform float sunAngle;`|normalised (0-1)|
|`uniform float shadowAngle;`|normalised (0-1)|
|`uniform float rainStrength;`|normalised (0-1)|
|`uniform float thunderStrength;`|normalise (0-1)|
|`uniform float viewWidth;`|width of viewport|
|`uniform float viewHeight;`|height of viewport|
|`uniform float aspectRatio;`|viewWidth divided by viewHeight|
|`uniform float near;`|near clipping plane|
|`uniform float far;`|far clipping plane|
|`uniform vec3 sunPosition;`|sun pos in eye space|
|`uniform vec3 moonPosition;`|moon pos in eye space|
|`uniform vec3 shadowLightPosition;`|shadow light pos (sun or moon) in eye space|
|`uniform vec3 upPosition;`|up direction|
|`uniform vec3 cameraPosition;`|camera pos in world space|
|`uniform vec3 previousCameraPosition;`|last frame camera pos in world space|
|``||
|``||
|``||
|``||
|``||
|``||
|``||
|``||
|``||
|``||
|``||
|``||
