# Layer Changes
### This file outlines the usage of directives in order to change render layers.

Render layer directives allow you to change in what layer a block renders. There are 4 such layers: solid, cutout, cutout-mipped, and translucent. You can change between any of them at will, though doing so can break stuff.

These changes belong in the `block.properties` file.

## Syntax
```java
layer.solid=<blocks>
layer.cutout=<blocks>
layer.cutout_mipped=<blocks>
layer.translucent=<blocks>
```

## Example
```java
layer.solid=glass
layer.cutout=dirt
layer.cutout_mipped=stone
layer.translucent=oak_leaves
```