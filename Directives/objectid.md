# Group Based Object Identification
### This file outlines the use mc_Entity in identifying objects.

## Setup
All mc_Entity setup belongs in block.properties or item.properties or entity.properties, based on type.
### Syntax
In the corresponding file:
```
<Object Type>.<Numerical ID To Assign>=<Objects>
```
Objects can be block, item, or entity.

Note: ids may not go beyond `65535`, as they are of data type short.

Note: Modded blocks are supported.

### Example
The Objects Belong In Diffrent Files Based On Type:
```
//In block.properties
block.20=red_wool oak_log
//In item.properties
item.30=diamond_sword dirt
//In entity.properties
entity.40=spider cow
```

## In Shader Usage
### Uniforms

|              **Uniform**             |             **Type**             | **Corresponding Object** |
|:------------------------------------:|:--------------------------------:|:------------------------:|
|        `uniform int entityId;`       | `int` with max length of `65535` |         `entity`         |
|     `uniform int blockEntityId;`     | `int` with max length of `65535` |          `block`         |
| `uniform int currentRenderedItemId;` | `int` with max length of `65535` |          `item`          |

- `entityId` is used to get the id of the enities. 
- `blockEntityId` is used to get the id of the block, or the id of a droped item.
- `currentRenderedItemId` returns the name of a item held in your hand. If the item is droped it returns 1, and you need to check `blockEntityId`.