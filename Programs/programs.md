# Program Information
This file outlines the uses of each program in Iris.


## Setup
| **Program Name** |                         **Usage**                         | **Fallback** |
|:----------------:|:-----------------------------------------------------------:|:------------:|
|`setup`|A compute only pass on pack load and on screen size change.|`none`|

## Begin
| **Program Name** |                         **Usage**                         | **Fallback** |
|:----------------:|:-----------------------------------------------------------:|:------------:|
|`begin`|A composite pass that runs before the shadow pass.|`none`|

## Shadow
| **Program Name** |                         **Usage**                         | **Fallback** |
|:----------------:|:-----------------------------------------------------------:|:------------:|
|`shadow`|Used to render shadow information to a shadow map.|`none`|
|`shadow_solid`|Preforms similar operations as the shadow pass, but only on solid objects. Not Used.|`shadow`|
|`shadow_cutout`|Preforms similar operations as the shadow pass, but only on cutout objects. Not Used.|`shadow`|

## Shadow Comp
| **Program Name** |                         **Usage**                         | **Fallback** |
|:----------------:|:-----------------------------------------------------------:|:------------:|
|`shadowcomp`|Preforms post procesing for the shadow map.|`none`|
|`shadowcomp1`|Preforms post procesing for the shadow map.|`none`|
...
|`shadowcomp99`|Preforms post procesing for the shadow map.|`none`|

## Prepare
| **Program Name** |                         **Usage**                         | **Fallback** |
|:----------------:|:-----------------------------------------------------------:|:------------:|
|`prepare`|Runs after Shadows, and before GBuffers.|`none`|
|`prepare1`|Runs after Shadows, and before GBuffers.|`none`|
...
|`prepare99`|Runs after Shadows, and before GBuffers.|`none`|

## Gbuffers
Gbuffer Programs are responsible for rendering most things in the world.
| **Program Name** |                         **Usage**                         | **Fallback** |
|:----------------:|:-----------------------------------------------------------:|:------------:|
|`gbuffers_basic`|Renders The Leash And Block Selecting Box Pixels. Is also the lowest fallback.|`none`|
|`gbuffers_textured`|Renders all textured things. Is used as a fallback..|`gbuffers_basic`|
|`gbuffers_textured_lit`|Renders all particles as a fallback and the world border. This is also used as a fallback for all objects that can recive light.|`gbuffers_textured`|
|`gbuffers_particles`|Renders all non-translucent particles.|`gbuffers_textured_lit`|
|`gbuffers_particles_translucent`|Renders translucent particles|`gbuffers_particles`|
|`gbuffers_skybasic`|Renders the sky, the horizon, the stars, and the void.|`gbuffers_basic`|
|`gbuffers_skytextured`|Renders the sun and the moon.|`gbuffers_textured`|
|`gbuffers_clouds`|Renders Clouds|`gbuffers_textured`|
|`gbuffers_terrain`|Renders Terrain|`gbuffers_textured_lit`|
|`gbuffers_terrain_solid`|Renders Terrain with no translucency or cutouts.|`gbuffers_terrain`|
|`gbuffers_terrain_cutout`|Renders Terrain with cutouts but no transparency.|`gbuffers_terrain`|
|`gbuffers_damagedblock`|Renders Damaged Blocks|`gbuffers_terrain`|
|`gbuffers_block`|Renders Block Entities|`gbuffers_terrain`|
|`gbuffers_block_translucent`|Renders transulcent block entities.|`gbuffers_block`|
|`gbuffers_beaconbeam`|Renders the Beacon Beam|`gbuffers_textured`|
|`gbuffers_entities`|Renders Entities|`gbuffers_textured_lit`|
|`gbuffers_entities_translucent`|Renders Translucent Entities|`gbuffers_entities`|
|`gbuffers_entities_glowing`|Renders Glowing Entities|`gbuffers_entities`|
|`gbuffers_armor_glint`|Renders glint on armour and items|`gbuffers_textured`|
|`gbuffers_spidereyes`|Renders spider, enderman, and dragon eyes.|`gbuffers_textured`|
|`gbuffers_hand`|Renders hands and non cutout, non translucent handheld items.|`gbuffers_textured_lit`|
|`gbuffers_weather`|Renders Rain and Snow.|`gbuffers_textured_lit`|
|`gbuffers_water`|Renders Translucent Liquides.|`gbuffers_terrain`|
|`gbuffers_hand_water`|Renders translucent handheld objects.|`gbuffers_hand`|

## Defered
| **Program Name** |                         **Usage**                         | **Fallback** |
|:----------------:|:-----------------------------------------------------------:|:------------:|
|`deferred_pre`|Only used to flip ping pong buffers|`none`|
|`deferred`|Used for deferd procesing.|`none`|
|`deferred1`|Used for deferd procesing.|`none`|
...
|`deferred99`|Used for deferd procesing.|`none`|

## Composite
| **Program Name** |                         **Usage**                         | **Fallback** |
|:----------------:|:-----------------------------------------------------------:|:------------:|
|`composite_pre`|Only used to flip ping pong buffers|`none`|
|`composite`|Used for post procesing and compositing.|`none`|
|`composite1`|Used for post procesing and compositing.|`none`|
...
|`composite99`|Used for post procesing and compositing.|`none`|


## Final
| **Program Name** |                         **Usage**                         | **Fallback** |
|:----------------:|:-----------------------------------------------------------:|:------------:|
|`final`|Used as a final program that runs after everything.|`none`|