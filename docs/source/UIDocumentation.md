Frontend Design 
=======
### Architechture
```app.js``` hosts the main app and calls ```content.js```, which loads up the main app. This file contains a few functions:

(The top most bullet contains the name of the method and the inner bullets are params.)
* openModal
* closeModal
* addNewLayer
  * layer
* changeSelectedLayer
  * layerId
* changeHoveredLayer
  * layerId
* modifyLayer
  * layer
  * layerId
* modifyLayerParams
  * layer
  * layerId
* deleteLayer
  * layerId
* updateParameters
  * layer
  * net
* calculateParameters
  * net
* loadLayerShapes
* exportNet
  * framework
* importNet
  * framework
  * id
* initialiseImportedNet
  * net
  * net_name
* changeNetName
  * event
* adjustParameters
  * layer
  * para
  * value
* changeNetStatus
  * bool
* changeNetPhase
  * phase
* dismissError
  * errorIndex
* addError
  * errorText
* dismissAllErrors
* copyTrain
* trainOnly
* saveDb
* loadDb
  * id
* infoModal
* toggleSidebar
* zooModal
* handleClick
  * event
  
```content.js``` invokes an instance of ```canvas.js``` that contains the following methods and params:
* allowDrop
  * event
* clickLayerEvent
  * event
  * layerId
* hoverLayerEvent
  * event
  * layerId
* scrollCanvas
* clickCanvas
  * event
* updateLayerPosition
  * event
* connectionEvent
  * connInfo
  * originalEvent
* detachConnectionEvent
  * connInfo
  * originalEvent
* drop
  * event
```canvas.js``` also contains the code that decides whether a node's line needs to be rerouted if it is cutting through another node. 

The method it uses is the following:
checkIfCuttingLine is passed in a positional block that includes x and y coordinates (it assumes a px is at the end of each x and y) for each endpoint of the line it is checking. 
Specifically, it is checking if the line formed with the coordinates in the positional block will cut into any other nodes between them.

checkIfCuttingLine creates then creates an equation from the x and y points by calculating the slope and using point slope form. 

After this, it calls getBetween to get the nodes between the x and y coordinates of the created line. 

The getBetween also serves the purpose of returning which direction in which the majority of the blocks between are. This is purely for performance, other wise it would be seperated into a seperate function. 

After getBetween returns with the id's of the nodes are between the x and y coordinate pair, check if cutting line loops through them to check whether or not the resultant line will cut through the in between node.

If it does, it will return the direction the line needs to be shifted to the parent function, checkIfCuttingNet, to iterate once again 80 pixels to either the left or right (depending on the return.) 

This algorthimic design creates the possibility of an infinite loop if the canvas has been completely occupied  and there is no more space remaining. 
