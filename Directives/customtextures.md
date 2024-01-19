# Custom Texture Directives
### This file outlines how to use directives to register custom textures. To see how to use them, check out the file textures.md in Buffers and Textures

Custom texture directives belong in the shaders.properties file. <br>
The path atribute uses the shaders folder as the root folder for its path. It is recomended to create a new folder within called `textures`.

## Syntax
```
customTexture.<Texture Name> = <Path> <Type> <InternalFormat> <Dimensions> <PixelFormat> <PixelType>
```

The syntax above is used, though most of the inputs are not required, and the basic input is as follows:

```
customTexture.<Texture Name> = <Path>
```

## Example
```
customTexture.MyLut = textures/myLut.png
```