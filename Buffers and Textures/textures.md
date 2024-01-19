#  Texture Information
### This file contains information about textures, and what can be done with them.

## Coordinate System
Most textures use a 0-1 coordiante system, with 0 being one side, and 1 being the other. Textures start in the top left corner, and work their way down.

## Custom Textures
Custom textures are a great way to save data. They can be accesed like any other texture via their uniform:
```
uniform sampler2D <Texture Name>;

// And when you want to get the information

texture2D(<Texture Name>, <Access Coordinates>);
```

`<Texture Name>` must match the one added in the directive.

Information on adding custom textures can be found in customtextures.md in the directives folder.

You can have a maximum of either 16 or 32 textures in your pass, this includes the colortex[i] textures.
## Clamping
Textures can either be set to clamp or repeate. This information belongs in an mcmeta file, as mentioned later. This is the clamp value.

## Linear Interpolation
Textures can either be set to interpolate or snap to the nearest value.. This information belongs in an mcmeta file, as mentioned later. This is the blur value.

## MCMETA
Texture Properties are placed in their respective mcmeta files, as shown below. These files control the textures properties.

### Naming
Naming follows this syntax:
```
<Texture File Name and Extention>.mcmeta
```

### Syntax
Syntax is as follows:
```
{
	"texture": {
		"blur":<True Or False>,
		"clamp":<True Or False>
	}
}
```