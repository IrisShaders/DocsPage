# Uniform Information
This file outlines the uses of each uniform in Iris.


## Normal Uniforms
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
|`uniform float far;`|render distance in blocks, 1/4 of cliping plane|
|`uniform vec3 sunPosition;`|sun pos in eye space|
|`uniform vec3 moonPosition;`|moon pos in eye space|
|`uniform vec3 shadowLightPosition;`|shadow light pos (sun or moon) in eye space|
|`uniform vec3 upPosition;`|up direction|
|`uniform vec3 cameraPosition;`|camera pos in world space|
|`uniform vec3 previousCameraPosition;`|last frame camera pos in world space|
|`uniform float wetness;`|rainStrength smoothed by wetnessHalfLife and/or drynessHalfLife|
|`uniform float eyeAltitude;`|view entity y pos in world space|
|`uniform ivec2 eyeBrightness;`|x is block, y is sky, light 0-15 = brightness 0-240|
|`uniform ivec2 eyeBrightnessSmooth;`|eyeBrightness smoothed by eyeBrightnessHalflife|
|`uniform int isEyeInWater;`|1 in water, 2 in lava, 3 in powderd snow|
|``||
|``||
|``||
|``||
|``||
|``||
|``||

## Conversion MAT4s
| **Name** |                         **Usage**                         |
|:----------------:|:-----------------------------------------------------------:|
|`uniform mat4 gbufferModelView;`|modelview matrix after setting up all of the camera transformations|
|`uniform mat4 gbufferModelViewInverse;`|inverse of gbufferModelView|
|`uniform mat4 gbufferPreviousModelView;`|last frames gbufferModelView|
|`uniform mat4 gbufferProjection;`|projection matrix created when gbuffers were generated|
|`uniform mat4 gbufferProjectionInverse;`|inverse of gbufferProjection|
|`uniform mat4 gbufferPreviousProjection;`|last frame gbufferProjection|
|`uniform mat4 shadowProjection;`|projection matrix from when the shadow map was generated|
|`uniform mat4 shadowProjectionInverse;`|inverse of shadowProjection|
|`uniform mat4 shadowModelView;`|modelview matrix from when the shadow map was generated|
|`uniform mat4 shadowModelViewInverse;`|inverse of shadowModelView|
