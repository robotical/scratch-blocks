'use strict';

goog.provide('Blockly.Blocks.mv2');
goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.constants');
goog.require('Blockly.ScratchBlocks.VerticalExtensions');

Blockly.Blocks['mv2_walk'] = {
  /**
   * Block to make Marty walk
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "%1 %2 Walk %3 steps, step length %4, step time %5, turn %6 \%",
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

Blockly.Blocks['mv2_step'] = {
  /**
   * Block to make Marty take a step
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit( {
      "message0": "%1 %2 Take a step, step time %3 s, step length %4, turning %5 \%, ",
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
          "name": "STEPLEN"
        },
        {
          "type": "input_value",
          "name": "TURN"
        }
      ],
      "extensions": ["colours_mv2", "shape_statement"]
    });
  }
}

Blockly.Blocks['mv2_kick'] = {
  /**
   * Block to make Marty kick
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "%1 %2 kick %4 leg, kick time %3 s, turn %5 \%",
      "category": Blockly.Categories.motion,
      "args0": [
        {
          "type": "field_image",
          "src": Blockly.mainWorkspace.options.pathToMedia + "extentsions/marty-small.svg",
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
        },
        {
          "type": "input_value",
          "name": "TURN"
        }
      ],
      "extensions": ["colours_mv2", "shape_statement"]
    });
  }
}

Blockly.Blocks['mv2_sidestep'] = {
  /**
   * Block to make Marty sidestep
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "%1 %2 step to the %3 , step time %4 s, step length %5",
      "category": Blockly.Categories.motion,
      "args0": [
        {
          "type": "field_image",
          "src": Blockly.mainWorkspace.options.pathToMedia + "extentsions/marty-small.svg",
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
}

Blockly.Blocks['mv2_sidefall'] = {
  /**
   * Block to make Marty sidestep
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "%1 %2 sidefall to the %3 , sidefall time %4 s, sidefall length %5",
      "category": Blockly.Categories.motion,
      "args0": [
        {
          "type": "field_image",
          "src": Blockly.mainWorkspace.options.pathToMedia + "extentsions/marty-small.svg",
          "width": 40,
          "heigh": 40
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
}

Blockly.Blocks['mv2_wiggle'] = {
  /**
   * Block to make Marty wiggle
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": "%1 %2 Wiggle for %3 s",
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
      "category": Blockly.Categories.mv2,
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
      "category": Blockly.Categories.mv2,
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
      "extensions": ["colours_mvs2", "shape_statement"]
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
      "category": Blockly.Categories.mv2,
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

