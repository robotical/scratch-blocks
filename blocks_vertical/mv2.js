'use strict';

goog.provide('Blockly.Blocks.mv2');
goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.constants');
goog.require('Blockly.ScratchBlocks.VerticalExtensions');

Blockly.Blocks['mv2_getReady'] = {
  /**
   * Block to make Marty freeze
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "%1 %2 Get ready!",
      "category": Blockly.Categories.control,
      "args0": [
        {
          "type": "field_image",
          "src": Blockly.mainWorkspace.options.pathToMedia + "extensions/marty-small.svg",
          "width": 40,
          "height": 40
        },
        {
          "type": "field_vertical_separator"
        }
      ],
      "extensions": ["colours_mv2", "shape_statement"]
    });
  }
};

Blockly.Blocks['mv2_walk_fw'] = {
  /**
   * Block to make Marty walk forwards
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "%1 %2 Walk %3 steps forwards",
      "category": Blockly.Categories.motion,
      "args0": [
        {
          "type": "field_image",
          "src": Blockly.mainWorkspace.options.pathToMedia + "extensions/marty-small.svg",
          "width": 40,
          "height": 40
        },
        {
          "type": "field_vertical_separator"
        },
        {
          "type": "input_value",
          "name": "STEPS"
        }
      ],
      "extensions": ["colours_mv2", "shape_statement"]
    });
  }
};

Blockly.Blocks['mv2_walk_bw'] = {
  /**
   * Block to make Marty walk backwards
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "%1 %2 Walk %3 steps backwards",
      "category": Blockly.Categories.motion,
      "args0": [
        {
          "type": "field_image",
          "src": Blockly.mainWorkspace.options.pathToMedia + "extensions/marty-small.svg",
          "width": 40,
          "height": 40
        },
        {
          "type": "field_vertical_separator"
        },
        {
          "type": "input_value",
          "name": "STEPS"
        }
      ],
      "extensions": ["colours_mv2", "shape_statement"]
    });
  }
};

Blockly.Blocks['mv2_walk'] = {
  /**
   * Block to make Marty walk
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit( {
      "message0": "%1 %2 Walk %3 steps with step length %4mm and step time %5s, and turn %6°",
      "category": Blockly.Categories.motion,
      "args0": [
        {
          "type": "field_image",
          "src": Blockly.mainWorkspace.options.pathToMedia + "extensions/marty-small.svg",
          "width": 40,
          "height": 40
        },
        {
          "type": "field_vertical_separator"
        },
        {
          "type": "input_value",
          "name": "STEPS"
        },
        {
          "type": "input_value",
          "name": "STEPLEN"
        },
        {
          "type": "input_value",
          "name": "MOVETIME"
        },
        {
          "type": "input_value",
          "name": "TURN"
        }
      ],
      "extensions": ["colours_mv2", "shape_statement"]
    });
  }
};

Blockly.Blocks['mv2_turn'] = {
  /**
   * Block to make Marty walk
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit( {
      "message0": "%1 %2 Turn %3 steps %4",
      "category": Blockly.Categories.motion,
      "args0": [
        {
          "type": "field_image",
          "src": Blockly.mainWorkspace.options.pathToMedia + "extensions/marty-small.svg",
          "width": 40,
          "height": 40
        },
        {
          "type": "field_vertical_separator"
        },
        {
          "type": "input_value",
          "name": "STEPS"
        },
        {
          "type": "field_dropdown",
          "name": "SIDE",
          "options": [
            [ "left", 0 ],
            [ "right", 1 ]
          ]
        }
      ],
      "extensions": ["colours_mv2", "shape_statement"]
    });
  }
};

Blockly.Blocks['mv2_wiggle'] = {
  /**
   * Block to make Marty wiggle
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "%1 %2 Wiggle",
      "category": Blockly.Categories.motion,
      "args0": [
        {
          "type": "field_image",
          "src": Blockly.mainWorkspace.options.pathToMedia + "extensions/marty-small.svg",
          "width": 40,
          "height": 40
        },
        {
          "type": "field_vertical_separator"
        }
      ],
      "extensions": ["colours_mv2", "shape_statement"]
    });
  }
};

Blockly.Blocks['mv2_circle'] = {
  /**
   * Block to make Marty move in a circle
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "%1 %2 Circle dance %4 for %3s",
      "category": Blockly.Categories.motion,
      "args0": [
        {
          "type": "field_image",
          "src": Blockly.mainWorkspace.options.pathToMedia + "extensions/marty-small.svg",
          "width": 40,
          "height": 40
        },
        {
          "type": "field_vertical_separator"
        },
        {
          "type": "input_value",
          "name": "MOVETIME"
        },
        {
          "type": "field_dropdown",
          "name": "SIDE",
          "options": [
            [ "left", 0 ],
            [ "right", 1 ]
          ]
        }
      ],
      "extensions": ["colours_mv2", "shape_statement"]
    });
  }
};

Blockly.Blocks['mv2_kick'] = {
  /**
   * Block to make Marty kick
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "%1 %2 Kick %3 leg",
      "category": Blockly.Categories.motion,
      "args0": [
        {
          "type": "field_image",
          "src": Blockly.mainWorkspace.options.pathToMedia + "extensions/marty-small.svg",
          "width": 40,
          "height": 40
        },
        {
          "type": "field_vertical_separator"
        },
        {
          "type": "field_dropdown",
          "name": "SIDE",
          "options": [
            [ "left", 0 ],
            [ "right", 1 ]
          ]
        },
        /*{
          "type": "input_value",      // proposed optional parameter
          "name": "TURN"
        }*/
      ],
      "extensions": ["colours_mv2", "shape_statement"]
    });
  }
};

Blockly.Blocks['mv2_lean'] = {
  /**
   * Block to make Marty lean
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "%1 %2 Lean %4 for %3s",
      "category": Blockly.Categories.motion,
      "args0": [
        {
          "type": "field_image",
          "src": Blockly.mainWorkspace.options.pathToMedia + "extensions/marty-small.svg",
          "width": 40,
          "height": 40
        },
        {
          "type": "field_vertical_separator"
        },
        {
          "type": "input_value",
          "name": "MOVETIME"
        },
        {
          "type": "field_dropdown",
          "name": "SIDE",
          "options": [
            [ "left", 0 ],
            [ "right", 1 ]
          ]
        }
      ],
      "extensions": ["colours_mv2", "shape_statement"]
    });
  }
};

Blockly.Blocks['mv2_slide'] = {
  /**
   * Block to make Marty slide
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "%1 %2 Slide %3 times to the %4",
      "category": Blockly.Categories.motion,
      "args0": [
        {
          "type": "field_image",
          "src": Blockly.mainWorkspace.options.pathToMedia + "extensions/marty-small.svg",
          "width": 40,
          "height": 40
        },
        {
          "type": "field_vertical_separator"
        },
        {
          "type": "input_value",
          "name": "STEPS"
        },
        {
          "type": "field_dropdown",
          "name": "SIDE",
          "options": [
            [ "left", 0 ],
            [ "right", 1 ]
          ]
        }
      ],
      "extensions": ["colours_mv2", "shape_statement"]
    });
  }
};

Blockly.Blocks['mv2_eyes'] = {
  /**
   * Block to make Marty's eyes emote
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "%1 %2 Eyes: %3",
      "category": Blockly.Categories.motion,
      "args0": [
        {
          "type": "field_image",
          "src": Blockly.mainWorkspace.options.pathToMedia + "extensions/marty-small.svg",
          "width": 40,
          "height": 40
        },
        {
          "type": "field_vertical_separator"
        },
        {
          "type": "field_dropdown",
          "name": "SIDE",
          "options": [
            [ "excited", "eyesExcited" ],
            [ "wide", "eyesWide" ],
            [ "angry", "eyesAngry" ],
            [ "normal", "eyesNormal" ]
          ]
        }
      ],
      "extensions": ["colours_mv2", "shape_statement"]
    });
  }
};

Blockly.Blocks['mv2_sidefall'] = {
  /**
   * Block to make Marty 'sidefall'
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "%1 %2 'Sidefall' to the %3 , sidefall time %4 s, sidefall length %5",
      "category": Blockly.Categories.motion,
      "args0": [
        {
          "type": "field_image",
          "src": Blockly.mainWorkspace.options.pathToMedia + "extensions/marty-small.svg",
          "width": 40,
          "height": 40
        },
        {
          "type": "field_vertical_separator"
        },
        {
          "type": "input_value",
          "name": "SIDE"
        },
        {
          "type": "input_value",
          "name": "MOVETIME"
        },
        {
          "type": "input_value",
          "name": "STEPLEN"
        }
      ],
      "extensions": ["colours_mv2", "shape_statement"]
    });
  }
};

Blockly.Blocks['mv2_wave'] = {
  /**
   * Block to make Marty wave
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "%1 %2 Wave %4 arm for %3 s",
      "category": Blockly.Categories.motion,
      "args0": [
        {
          "type": "field_image",
          "src": Blockly.mainWorkspace.options.pathToMedia + "extensions/marty-small.svg",
          "width": 40,
          "height": 40
        },
        {
          "type": "field_vertical_separator"
        },
        {
          "type": "input_value",
          "name": "MOVETIME"
        },
        {
          "type": "input_value",
          "name": "SIDE"
        }
      ],
      "extensions": ["colours_mv2", "shape_statement"]
    });
  }
};

Blockly.Blocks['mv2_waggleEyes'] = {
  /**
   * Block to make Marty waggle its eyes
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "%1 %2 Waggle eyes for %3 s",
      "category": Blockly.Categories.motion,
      "args0": [
        {
          "type": "field_image",
          "src": Blockly.mainWorkspace.options.pathToMedia + "extensions/marty-small.svg",
          "width": 40,
          "height": 40
        },
        {
          "type": "field_vertical_separator"
        },
        {
          "type": "input_value",
          "name": "MOVETIME"
        }
      ],
      "extensions": ["colours_mv2", "shape_statement"]
    });
  }
};


Blockly.Blocks['mv2_stepLeft'] = {
  /**
   * Block to make Marty take a step with his left foot
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "%1 %2 Step left foot, with step time %3 s, step length %4 , turn %5 \% ",
      "category": Blockly.Categories.motion,
      "args0": [
        {
          "type": "field_image",
          "src": Blockly.mainWorkspace.options.pathToMedia + "extensions/marty-small.svg",
          "width": 40,
          "height": 40
        },
        {
          "type": "field_vertical_separator"
        },
        {
          "type": "input_value",
          "name": "MOVETIME"
        },
        {
          "type": "input_value",
          "name": "STEPLENGTH"
        },
        {
          "type": "input_value",
          "name": "TURN"
        }
      ],
      "extensions": ["colours_mv2", "shape_statement"]
    });
  }
};

Blockly.Blocks['mv2_stepRight'] = {
  /**
   * Block to make Marty take a step with his right foot
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "%1 %2 Step right foot, with step time %3 s, step length %4 , turn %5 \% ",
      "category": Blockly.Categories.motion,
      "args0": [
        {
          "type": "field_image",
          "src": Blockly.mainWorkspace.options.pathToMedia + "extensions/marty-small.svg",
          "width": 40,
          "height": 40
        },
        {
          "type": "field_vertical_separator"
        },
        {
          "type": "input_value",
          "name": "MOVETIME"
        },
        {
          "type": "input_value",
          "name": "STEPLENGTH"
        },
        {
          "type": "input_value",
          "name": "TURN"
        }
      ],
      "extensions": ["colours_mv2", "shape_statement"]
    });
  }
};

Blockly.Blocks['mv2_kickLeft'] = {
  /**
   * Block to make Marty kick with his left leg
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "%1 %2 Kick left leg with kick time %3 s, turn %4 \% ",
      "category": Blockly.Categories.motion,
      "args0": [
        {
          "type": "field_image",
          "src": Blockly.mainWorkspace.options.pathToMedia + "extensions/marty-small.svg",
          "width": 40,
          "height": 40
        },
        {
          "type": "field_vertical_separator"
        },
        {
          "type": "input_value",
          "name": "MOVETIME"
        },
        {
          "type": "input_value",
          "name": "TURN"
        }
      ],
      "extensions": ["colours_mv2", "shape_statement"]
    });
  }
};

Blockly.Blocks['mv2_kickRight'] = {
  /**
   * Block to make Marty kick with his left leg
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "%1 %2 Kick right leg with kick time %3 s, turn %4 \% ",
      "category": Blockly.Categories.motion,
      "args0": [
        {
          "type": "field_image",
          "src": Blockly.mainWorkspace.options.pathToMedia + "extensions/marty-small.svg",
          "width": 40,
          "height": 40
        },
        {
          "type": "field_vertical_separator"
        },
        {
          "type": "input_value",
          "name": "MOVETIME"
        },
        {
          "type": "input_value",
          "name": "TURN"
        }
      ],
      "extensions": ["colours_mv2", "shape_statement"]
    });
  }
};

Blockly.Blocks['mv2_sidestepLeft'] = {
  /**
   * Block to make Marty sidestep to the left
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "%1 %2 Sidestep left with step time %3 s, step length %4",
      "category": Blockly.Categories.motion,
      "args0": [
        {
          "type": "field_image",
          "src": Blockly.mainWorkspace.options.pathToMedia + "extensions/marty-small.svg",
          "width": 40,
          "height": 40
        },
        {
          "type": "field_vertical_separator"
        },
        {
          "type": "input_value",
          "name": "MOVETIME"
        },
        {
          "type": "input_value",
          "name": "STEPLENGTH"
        }
      ],
      "extensions": ["colours_mv2", "shape_statement"]
    });
  }
};

Blockly.Blocks['mv2_sidestepRight'] = {
  /**
   * Block to make Marty sidestep to the right
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "%1 %2 Sidestep right with step time %3 s, step length %4",
      "category": Blockly.Categories.motion,
      "args0": [
        {
          "type": "field_image",
          "src": Blockly.mainWorkspace.options.pathToMedia + "extensions/marty-small.svg",
          "width": 40,
          "height": 40
        },
        {
          "type": "field_vertical_separator"
        },
        {
          "type": "input_value",
          "name": "MOVETIME"
        },
        {
          "type": "input_value",
          "name": "STEPLENGTH"
        }
      ],
      "extensions": ["colours_mv2", "shape_statement"]
    });
  }
};

Blockly.Blocks['mv2_circleLeft'] = {
  /**
   * Block to make Marty circle his body left
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "%1 %2 Circle left for %3 s",
      "category": Blockly.Categories.motion,
      "args0": [
        {
          "type": "field_image",
          "src": Blockly.mainWorkspace.options.pathToMedia + "extensions/marty-small.svg",
          "width": 40,
          "height": 40
        },
        {
          "type": "field_vertical_separator"
        },
        {
          "type": "input_value",
          "name": "MOVETIME"
        }
      ],
      "extensions": ["colours_mv2", "shape_statement"]
    });
  }
};

Blockly.Blocks['mv2_circleRight'] = {
  /**
   * Block to make Marty circle his body right
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "%1 %2 Circle right for %3 s",
      "category": Blockly.Categories.motion,
      "args0": [
        {
          "type": "field_image",
          "src": Blockly.mainWorkspace.options.pathToMedia + "extensions/marty-small.svg",
          "width": 40,
          "height": 40
        },
        {
          "type": "field_vertical_separator"
        },
        {
          "type": "input_value",
          "name": "MOVETIME"
        }
      ],
      "extensions": ["colours_mv2", "shape_statement"]
    });
  }
};

Blockly.Blocks['mv2_waveLeft'] = {
  /**
   * Block to make Marty wave with his left arm
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "%1 %2 Wave left for %3 s",
      "category": Blockly.Categories.motion,
      "args0": [
        {
          "type": "field_image",
          "src": Blockly.mainWorkspace.options.pathToMedia + "extensions/marty-small.svg",
          "width": 40,
          "height": 40
        },
        {
          "type": "field_vertical_separator"
        },
        {
          "type": "input_value",
          "name": "MOVETIME"
        }
      ],
      "extensions": ["colours_mv2", "shape_statement"]
    });
  }
};

Blockly.Blocks['mv2_waveRight'] = {
  /**
   * Block to make Marty wave with his right arm
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "%1 %2 Wave right arm for %3 s",
      "category": Blockly.Categories.motion,
      "args0": [
        {
          "type": "field_image",
          "src": Blockly.mainWorkspace.options.pathToMedia + "extensions/marty-small.svg",
          "width": 40,
          "height": 40
        },
        {
          "type": "field_vertical_separator"
        },
        {
          "type": "input_value",
          "name": "MOVETIME"
        }
      ],
      "extensions": ["colours_mv2", "shape_statement"]
    });
  }
};



Blockly.Blocks['mv2_demo_sensor'] = {
  /**
   * Block to give readout of demo sensor
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "%1 %2 Demo sensor",
      "category": Blockly.Categories.sensing,
      "checkboxInFlyout": true,
      "args0": [
        {
          "type": "field_image",
          "src": Blockly.mainWorkspace.options.pathToMedia + "extensions/marty-small.svg",
          "width": 40,
          "height": 40
        },
        {
          "type": "field_vertical_separator"
        }
      ],
      "extensions": ["colours_mv2", "output_number"]
    });
  }
};

Blockly.Blocks['mv2_set_demo_sensor'] = {
  /**
   * Block to set demo sensor value
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "%1 %2 Set Demo sensor to %3",
      "category": Blockly.Categories.sensing,
      "args0": [
        {
          "type": "field_image",
          "src": Blockly.mainWorkspace.options.pathToMedia + "extensions/marty-small.svg",
          "width": 40,
          "height": 40
        },
        {
          "type": "field_vertical_separator"
        },
        {
          "type": "input_value",
          "name": "SENSORVAL"
        }
      ],
      "extensions": ["colours_mv2", "shape_statement"]
    });
  }
};



Blockly.Blocks['mv2_set_ip'] = {
  /**
   * Block to set Marty IP for REST commands
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "%1 %2 Set IP to %3",
      "category": Blockly.Categories.control,
      "args0": [
        {
          "type": "field_image",
          "src": Blockly.mainWorkspace.options.pathToMedia + "extensions/marty-small.svg",
          "width": 40,
          "height": 40
        },
        {
          "type": "field_vertical_separator"
        },
        {
          "type": "input_value",
          "name": "IP"
        }
      ],
      "extensions": ["colours_mv2", "shape_statement"]
    });
  }
};

Blockly.Blocks['mv2_stop'] = {
  /**
   * Block to make Marty freeze
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "%1 %2 Stop!",
      "category": Blockly.Categories.control,
      "args0": [
        {
          "type": "field_image",
          "src": Blockly.mainWorkspace.options.pathToMedia + "extensions/marty-small.svg",
          "width": 40,
          "height": 40
        },
        {
          "type": "field_vertical_separator"
        }
      ],
      "extensions": ["colours_mv2", "shape_statement"]
    });
  }
};

Blockly.Blocks['mv2_standStraight'] = {
  /**
   * Block to make Marty stand up straight
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "%1 %2 Stand straight in %3s",
      "category": Blockly.Categories.motion,
      "args0": [
        {
          "type": "field_image",
          "src": Blockly.mainWorkspace.options.pathToMedia + "extensions/marty-small.svg",
          "width": 40,
          "height": 40
        },
        {
          "type": "field_vertical_separator"
        },
        {
          "type": "input_value",
          "name": "MOVETIME"
        }
      ],
      "extensions": ["colours_mv2", "shape_statement"]
    });
  }
};

Blockly.Blocks['mv2_playsound'] = {
  /**
   * Block to make Marty play a specified sound
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "%1 %2 Play sound: %3",
      "category": Blockly.Categories.sound,
      "args0": [
        {
          "type": "field_image",
          "src": Blockly.mainWorkspace.options.pathToMedia + "extensions/marty-small.svg",
          "width": 40,
          "height": 40
        },
        {
          "type": "field_vertical_separator"
        },
        {
          "type": "input_value",
          "name": "FILENAME"
        }
      ],
      "extensions": ["colours_mv2", "shape_statement"]
    });
  }
};
