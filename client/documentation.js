export default {"AutoLocationTooltip":"/**\n * @name\n * AutoLocationTooltip\n * \n * @description\n * An auto-location version of the Tooltip. Responsive solution to the tooltip.\n * See Tooltip for more information - it uses the same props\n *\n * @example\n * <AutoLocationTooltip tooltip={'tooltip inner text!'} side=\"top\" alignment=\"start\" trigger=\"hover\">\n *     <span>Text to open the tooltip upon</span>\n * </AutoLocationTooltip>\n *\n * @param {*} [tooltip] tooltip inner content, can be text or elements\n * @param {\"top\"|\"bottom\"} [side=\"top\"] preferred placement of the tooltip relative to the element\n * @param {\"center\"|\"start\"|\"end\"} [alignment=\"center\"] preferred alignment of the tooltip relative to the element\n * @param {\"click\"|\"hover\"} [trigger=\"click\"] trigger event, on mobile you should stick with click\n * @param {function} [onTooltipOpen] callback for when the tooltip is opened\n * @param {function} [onAfterTooltipOpen] callback for after the tooltip is opened\n * @param {node} [children] the element/s to be triggering the tooltip appearance\n */","Card":"/**\n * @name \n * Card\n * \n * @description\n * Card container with border and box-shadow\n *\n * @example\n * // card with children\n * <Card>\n *  1123\n * </Card>\n *\n * @param {String} [className] Append class name to container\n * @param {React.Children} [children] Children elements\n *\n */","CodeCard":"/**\n * @description\n * CodeCard with border and inset box-shadow\n *\n * @example\n * <CodeCard></CodeCard>\n *\n * @param {String} [className]\n * @param {React.Children} [children]\n *\n */","Menu":"/**\n * @name\n * Menu \n * @description\n * Menu to select items\n * \n * @example\n * <Menu value=\"red\" onChange={(e, val) => console.log(val)}>\n *    <MenuItem value=\"red\"\n *          style={{backgroundColor:\"#f59a9a\"}}>\n *          Color red\n *    </MenuItem>\n *    <MenuItem value=\"blue\"\n *          style={{backgroundColor:\"#2196f3\"}}>\n *          Color blue\n *    </MenuItem>\n *    <MenuItem value=\"yellow\"\n *          style={{backgroundColor:\"#ffeb3b\"}}>\n *          Color yellow\n *    </MenuItem>\n * </Menu>\n * \n * @param {any} value\n * @param {function} [onChange]\n * @param {node} children\n */","MenuItem":"/**\n * @name \n * MenuItem\n * \n * @description\n * Menu Item\n * \n * @example \n * <MenuItem>\n *   Menu Item\n * </MenuItem>\n *\n * @param {node} children\n */","RaisedButton":"/**\n * @name \n * RaisedButton\n * \n * @example\n * <RaisedButton onClick={(e) => console.log('RaisedButton was clicked, event: ', e)}>\n *    Raised Button\n * </RaisedButton>\n * \n * @param {any} children\n * @param {function} [onClick]\n */","TextField":"/**\n * @name\n * TextField\n * \n * @description\n * Text Field\n * \n * @example\n * // Without value\n * <TextField\n *      placeholder=\"Placeholder Text\"\n *      onChange={(e) => console.log('TextField was changed with value: ', e.target.value)}/>\n * \n * @example\n * // With controlled value, change only from the parent\n * <TextField\n *      value=\"Can't change this\"\n *      onChange={(e) => console.log('TextField was changed with value: ', e.target.value)}/>\n * \n * @param {string} [placeholder] value as a placeholder until user input another value\n * @param {string} [value] current value of the text field\n * @param {function} onChange\n */","Separator":"/**\n * @name\n * Separator\n * \n * @description\n * Separator\n * A generic separator to be used between components\n *\n * @example\n * <Separator/>\n *\n * @param {Array} [children]\n *\n */"}