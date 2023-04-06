# Running Doc

## Link

tutorial link: https://youtu.be/UIlVeMFEWa8?t=1726
kanban board: [https://trello.com/b/lmnWcXPT/3dballtube](https://trello.com/b/lmnWcXPT/3dballtube)

[Scratch Pad](https://www.notion.so/Scratch%20Pad.md)

## Topics

- three.js
- blender
- js
- animation
- scroll

## BlenderGG

- install blender

### Set blender to gpu mode!
https://youtu.be/1io1yPj0Sk0?t=109

1. edit ->  preference -> system
2. cuda tab -> enable gpu
3. change the render mode now to gpu compute
4. also change the performance tab memory and tiling check the vid

## key shortcuts

### Navigation
- press and hold **mouse scroll/ middle btn** to navigate 3d space
- `shift + mouse middle` to pan
- If you have a TKL layout keyboard
    - [using-blender-with-no-numpad](https://essentialpicks.com/using-blender-with-no-numpad/)
    - just use backtick( \` ) (Blender’s Pie menu)
    - you will find the controls of numpad. , in **backtick + new selected**

### Creating planes
1. click `shift + A` to add new shape
2. click on the object `plane`

### Creating A backdrop
1. pre `tab` to go into edit mode
2. select 2 point of the plane
   1. press `E` to extrude (extend) the shape
   2. use `G` to move
   3. `GX` , `GY` , `GZ` restricts movements in one dimension

### Making a pipe in 3d in blender
1. click `shift + A` -> curve -> path
2. select the path and click on data obj property
3. geometry -> increase `depth`
4. now you can manupulate it like any other shape 
   1. G -move
   2. R -rotate
   3. E -extrude (make another connected dot)


### How to add physics in objects
1. select the object -> in the toolbar at right click on phisics properties
2. you get multiple options like rigid body


### How to make the **pipe** a rigid body for physics sim
1. curves cant become rigid body by default
2. select the pipe -> right click -> convert to mesh
3. making it rigid body type `passive`
   1. will make it detect colision 
   2. but doesn't get affected by gravity 

### How to see render view and what to change?
1. top right , on of the circle button say `viewport sheading`
2. in the tools bar change render property to `cycles` and `gpu compute` if you have one

### How to track a ball with the camera 
1. select camera -> get your objects inside the view
2. seclect the camarea object -> at starting the animation press `i` -> select `location` option
3. navigate and place the location markers in the desired places in camera view 
4. restart the timeline, you will see camera is moving based on the this location markers

### How to make the ball glow?
1. select the ball
2. go to material tab in sidebar
3. go to `emission`  
4. play with the hsl values

### How to render
[https://youtu.be/1io1yPj0Sk0?t=109](https://youtu.be/1io1yPj0Sk0?t=109)

1. Go the top toolbar 
    1. edit → preference → system
    2. cuda → enable your gpu
2. in the right hand toolbar -> `render properties`
    1. change
        1. render→ cycles
        2. device `gpu compute`
    2. enable the `denoise` option in render tab
    3. memory tab → use tiling (tile size 256)
3. Go to output properties
    1. select output path in `output tab`
    2. select you file format there  and the  color options
    3. check the frames needed in `frame range`  tab
    4. select resolution in `format tab`





### How To remove multiple zeros from the file names

1. use power-rename feature from **power-toys** software
2. `^0+` put this regular expression
    1. This pattern will match one or more zeros (0) at the beginning (^) of the string.
    2. the plus sign (+) is a quantifier that indicates that the preceding character or group should appear one or more times in the input string.
3. Apply Rename



### How to load an image properly in canvas?
- change the canvas width in css and js

### How to animate frames using gsap
1. google GASP cdn
   1. copy `gasp min` and `scroll trigger`
   2. paste them in body, or in head using `defer` tag
```js
// gsap animation
const frameTrack = { ballFrameCursor: 0 };
gsap.to(frameTrack, {
	//able to access the properties of the frameTrack object
	ballFrameCursor: frameCount - 1, // this is defining the end of the animation on the ballframecursor property of the frameTrack object
	snap: 'ballFrameCursor', // snap to the nearest whole number from the var frame track
	ease: 'none',
	scrollTrigger: {
		scrub: true,
		pin: '#canvas',
		end: '500%'
		// markers: true
	},
	onUpdate: render
});

```



