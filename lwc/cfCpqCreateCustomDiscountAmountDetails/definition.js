let definition =
      {"dataSource":{"contextVariables":[],"orderBy":{"isReverse":false,"name":""},"type":"Custom","value":{"body":"{\"onetimecheck\":false, \"recurringcheck\": false, \"recurringvalueicon\": \"$\", \"onetimevalueicon\": \"$\"}","dsDelay":"","resultVar":""}},"enableLwc":true,"events":[{"actionList":[{"card":"{card}","draggable":true,"isOpen":false,"key":"1626181767578-s8g4jhz0p","label":"onetime","stateAction":{"actionConditions":{"group":[{"field":"{action.value}","hasMergeField":true,"id":"state-new-condition-7","operator":"==","type":"custom","value":"onetime"}],"id":"state-condition-object","isParent":true},"eventName":"setValues","fieldValues":[{"fieldName":"onetimecheck","fieldValue":"{action.checked}"}],"id":"flex-action-1625136028851","type":"cardAction"}},{"card":"{card}","draggable":true,"isOpen":false,"key":"1626181767578-tdr72pyx8","label":"Recurring","stateAction":{"actionConditions":{"group":[{"field":"{action.value}","hasMergeField":true,"id":"state-new-condition-14","operator":"==","type":"custom","value":"recurring"}],"id":"state-condition-object","isParent":true},"eventName":"setValues","fieldValues":[{"fieldName":"recurringcheck","fieldValue":"{action.checked}"}],"id":"flex-action-1625136031867","type":"cardAction"}},{"card":"{card}","draggable":true,"isOpen":false,"key":"1626181767578-r0lgfud36","label":"Recurringadjustby","stateAction":{"actionConditions":{"group":[{"field":"{action.field}","hasMergeField":true,"id":"state-new-condition-38","operator":"==","type":"custom","value":"recurringadjustby"}],"id":"state-condition-object","isParent":true},"eventName":"setValues","fieldValues":[{"fieldName":"recurringvalueicon","fieldValue":"{action.value}"}],"id":"flex-action-1625149198300","type":"cardAction"}},{"card":"{card}","draggable":true,"isOpen":false,"key":"1626181767578-2lbc03q2q","label":"Onetimeadjustby","stateAction":{"actionConditions":{"group":[{"field":"{action.field}","hasMergeField":true,"id":"state-new-condition-47","operator":"==","type":"custom","value":"onetimeadjustby"}],"id":"state-condition-object","isParent":true},"eventName":"setValues","fieldValues":[{"fieldName":"onetimevalueicon","fieldValue":"{action.value}"}],"id":"flex-action-1625149537622","type":"cardAction"}}],"channelname":"customDiscoutField","displayLabel":"customDiscoutField:baseinputvaluechange","element":"action","eventLabel":"pubsub","eventname":"baseinputvaluechange","eventtype":"pubsub","key":"event-0","recordIndex":"0"}],"globalCSS":false,"isFlex":true,"lwc":{"DeveloperName":"cfCpqCreateCustomDiscountAmountDetails_1_Vlocity","Id":"0RbHr000001pv2aCA2","ManageableState":"unmanaged","MasterLabel":"cfCpqCreateCustomDiscountAmountDetails_1_Vlocity","NamespacePrefix":"vlocity_cmt"},"multilanguageSupport":true,"selectableMode":"Multi","sessionVars":[],"states":[{"actions":[],"childCards":["cpqTimePlan"],"components":{"layer-0":{"children":[{"children":[{"class":"slds-col ","element":"outputField","elementLabel":"Text-1","key":"element_element_block_0_0_outputField_0_0","name":"Text","parentElementKey":"element_block_0_0","property":{"card":"{card}","mergeField":"%3Cdiv%3E%7BLabel.CPQAmount%7D%3C/div%3E","record":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"section_title","container":{"class":""},"customClass":"section_title","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"section_title","container":{"class":""},"customClass":"section_title","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}}}],"type":"text"},{"class":"slds-col ","element":"outputField","elementLabel":"Text-2","key":"element_element_block_0_0_outputField_1_0","name":"Text","parentElementKey":"element_block_0_0","property":{"card":"{card}","mergeField":"%3Cdiv%3E%7BLabel.CPQSetAmountToBeApplied%7D%3C/div%3E","record":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"section_description","container":{"class":""},"customClass":"section_description","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"section_description","container":{"class":""},"customClass":"section_description","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}}}],"type":"text"}],"class":"slds-col ","element":"block","elementLabel":"Block-0","name":"Block","property":{"card":"{card}","collapsedByDefault":false,"collapsible":false,"label":"Block","record":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-around_x-small field-row","container":{"class":""},"customClass":"field-row","elementStyleProperties":{},"inlineStyle":"padding-bottom: 16px;","margin":[],"padding":[{"label":"around:x-small","size":"x-small","type":"around"}],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     : #ccc 1px solid; \n         padding-bottom: 16px;","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-around_x-small field-row","container":{"class":""},"customClass":"field-row","elementStyleProperties":{},"inlineStyle":"padding-bottom: 16px;","margin":[],"padding":[{"label":"around:x-small","size":"x-small","type":"around"}],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     : #ccc 1px solid; \n         padding-bottom: 16px;","text":{"align":"","color":""}}}],"type":"block"},{"children":[{"class":"slds-col ","element":"baseInputElement","elementLabel":"Block-1-Checkbox-0","key":"element_element_block_1_0_baseInputElement_0_0","name":"Checkbox","parentElementKey":"element_block_1_0","property":{"card":"{card}","propertyObj":{"checked":false,"customProperties":[{"id":0,"label":"data-field","value":"onetimecheck"},{"id":1,"label":"data-fieldtype","value":"amountcheck"},{"id":2,"label":"name","value":"customDiscoutField"}],"label":"{Label.OneTime}","name":"customDiscoutField","value":"onetime"},"record":"{record}","type":"checkbox"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"amt_checkbox","container":{"class":""},"customClass":"amt_checkbox","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"amt_checkbox","container":{"class":""},"customClass":"amt_checkbox","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}}}],"type":"element"},{"children":[{"children":[{"class":"slds-col ","element":"baseInputElement","elementLabel":"Block-1-Block-1-Block-0-ComboBox-0","key":"element_element_element_element_block_1_0_block_1_0_block_0_0_baseInputElement_0_0","name":"ComboBox","parentElementKey":"element_element_element_block_1_0_block_1_0_block_0_0","property":{"card":"{card}","propertyObj":{"customProperties":[{"id":0,"label":"options","value":"[{\"label\":\"Absolute\", \"value\":\"$\"},{\"label\":\"Percent\", \"value\":\"%\"}]"},{"id":1,"label":"data-field","value":"onetimeadjustby"},{"id":3,"label":"name","value":"customDiscoutField"}],"label":"{Label.CPQAdjustBy}","name":"customDiscoutField","type":"combobox","value":"$"},"record":"{record}","type":"combobox"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"sizeClass":"slds-size_12-of-12"},"type":"element"}],"class":"slds-col ","element":"block","elementLabel":"Block-1-Block-1-Block-0","key":"element_element_element_block_1_0_block_1_0_block_0_0","name":"Block","parentElementKey":"element_element_block_1_0_block_1_0","property":{"card":"{card}","collapsedByDefault":false,"collapsible":false,"label":"Block","record":"{record}"},"size":{"default":"6","isResponsive":true,"large":"5","medium":"6","small":"6"},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-around_x-small ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"around:x-small","size":"x-small","type":"around"}],"size":{"default":"6","isResponsive":true,"large":"5","medium":"6","small":"6"},"sizeClass":"slds-large-size_5-of-12 slds-medium-size_6-of-12 slds-small-size_6-of-12 slds-size_6-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-around_x-small ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"around:x-small","size":"x-small","type":"around"}],"size":{"default":"6","isResponsive":true,"large":"5","medium":"6","small":"6"},"sizeClass":"slds-large-size_5-of-12 slds-medium-size_6-of-12 slds-small-size_6-of-12 slds-size_6-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}}}],"type":"block"},{"children":[{"class":"slds-col ","element":"baseInputElement","elementLabel":"Block-1-Block-1-Block-1-Number-0","key":"element_element_element_element_block_1_0_block_1_0_block_1_0_baseInputElement_0_0","name":"Number","parentElementKey":"element_element_element_block_1_0_block_1_0_block_1_0","property":{"card":"{card}","propertyObj":{"customProperties":[{"id":0,"label":"name","value":"customDiscoutField"},{"id":1,"label":"data-field","value":"onetime"}],"imask":"","label":"{Label.PCValue}"},"record":"{record}","type":"number"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"value","container":{"class":""},"customClass":"value","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"value","container":{"class":""},"customClass":"value","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}}}],"type":"element"},{"class":"slds-col ","element":"outputField","elementLabel":"Block-1-Block-1-Block-1-Text-1","key":"element_element_element_element_block_1_0_block_1_0_block_1_0_outputField_1_0","name":"Text","parentElementKey":"element_element_element_block_1_0_block_1_0_block_1_0","property":{"card":"{card}","data-conditions":{"group":[],"id":"state-condition-object","isParent":true},"mergeField":"%3Cdiv%3E%7Bonetimevalueicon%7D%3C/div%3E","record":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"custom_icon","container":{"class":""},"customClass":"custom_icon","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"custom_icon","container":{"class":""},"customClass":"custom_icon","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}}}],"type":"text"}],"class":"slds-col ","element":"block","elementLabel":"Block-1-Block-1-Block-1","key":"element_element_element_block_1_0_block_1_0_block_1_0","name":"Block","parentElementKey":"element_element_block_1_0_block_1_0","property":{"card":"{card}","collapsedByDefault":false,"collapsible":false,"label":"Block","record":"{record}"},"size":{"default":"6","isResponsive":true,"large":"3","medium":"6","small":"6"},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-around_x-small relative","container":{"class":""},"customClass":"relative","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"around:x-small","size":"x-small","type":"around"}],"size":{"default":"6","isResponsive":true,"large":"3","medium":"6","small":"6"},"sizeClass":"slds-large-size_3-of-12 slds-medium-size_6-of-12 slds-small-size_6-of-12 slds-size_6-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-around_x-small relative","container":{"class":""},"customClass":"relative","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"around:x-small","size":"x-small","type":"around"}],"size":{"default":"6","isResponsive":true,"large":"3","medium":"6","small":"6"},"sizeClass":"slds-large-size_3-of-12 slds-medium-size_6-of-12 slds-small-size_6-of-12 slds-size_6-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}}}],"type":"block"}],"class":"slds-col ","element":"block","elementLabel":"Block-1-Block-1","key":"element_element_block_1_0_block_1_0","name":"Block","parentElementKey":"element_block_1_0","property":{"card":"{card}","collapsedByDefault":false,"collapsible":false,"data-conditions":{"group":[{"field":"onetimecheck","hasMergeField":false,"id":"state-new-condition-9","operator":"==","type":"custom","value":"true"}],"id":"state-condition-object","isParent":true},"label":"Block","record":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"class":"slds-p-around_x-small","padding":[{"size":"x-small","type":"around"}],"sizeClass":"slds-size_12-of-12"},"type":"block"}],"class":"slds-col ","element":"block","elementLabel":"Block-1","name":"Block","property":{"card":"{card}","collapsedByDefault":false,"collapsible":false,"label":"Block","record":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-around_x-small field-row","container":{"class":""},"customClass":"field-row","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"around:x-small","size":"x-small","type":"around"}],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-around_x-small field-row","container":{"class":""},"customClass":"field-row","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"around:x-small","size":"x-small","type":"around"}],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}}}],"type":"block"},{"children":[{"class":"slds-col ","element":"baseInputElement","elementLabel":"Block-2-Checkbox-0","key":"element_element_block_2_0_baseInputElement_0_0","name":"Checkbox","parentElementKey":"element_block_2_0","property":{"card":"{card}","propertyObj":{"checked":false,"customProperties":[{"id":1,"label":"data-field","value":"recurringcheck"},{"id":1,"label":"data-fieldtype","value":"amountcheck"},{"id":2,"label":"name","value":"customDiscoutField"}],"label":"{Label.Recurring}","name":"customDiscoutField","value":"recurring"},"record":"{record}","type":"checkbox"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"amt_checkbox","container":{"class":""},"customClass":"amt_checkbox","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"amt_checkbox","container":{"class":""},"customClass":"amt_checkbox","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}}}],"type":"element"},{"children":[{"children":[{"class":"slds-col ","element":"baseInputElement","elementLabel":"Block-1-Block-1-Block-0-ComboBox-0","key":"element_element_element_element_block_2_0_block_1_0_block_0_0_baseInputElement_0_0","name":"ComboBox","parentElementKey":"element_element_element_block_2_0_block_1_0_block_0_0","property":{"action":{"actionData":{"card":"{card}","stateAction":{"Web Page":{"targetName":"/apex"},"displayName":"Action","eventName":"setValues","fieldValues":[{"fieldName":"Session.recurringvalueicon","fieldValue":"{action.value}"}],"id":"flex-action-1625125003671","openUrlIn":"Current Window","targetType":"Web Page","type":"cardAction","vlocityIcon":"standard-default"},"stateObj":"{record}"},"eventType":"onchange","iconName":"standard-default","label":"Action","name":""},"card":"{card}","propertyObj":{"action":null,"customProperties":[{"id":0,"label":"options","value":"[{\"label\":\"Absolute\", \"value\":\"$\"},{\"label\":\"Percent\", \"value\":\"%\"}]"},{"id":1,"label":"data-field","value":"recurringadjustby"},{"id":3,"label":"name","value":"customDiscoutField"}],"label":"{Label.CPQAdjustBy}","name":"customDiscoutField","type":"combobox","value":"$"},"record":"{record}","type":"combobox"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"sizeClass":"slds-size_12-of-12"},"type":"element"}],"class":"slds-col ","element":"block","elementLabel":"Block-1-Block-1-clone-0-Block-0","key":"element_element_element_block_2_0_block_1_0_block_0_0","name":"Block","parentElementKey":"element_element_block_2_0_block_1_0","property":{"card":"{card}","collapsedByDefault":false,"collapsible":false,"label":"Block","record":"{record}"},"size":{"default":"6","isResponsive":true,"large":"5","medium":"6","small":"6"},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-around_x-small ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"around:x-small","size":"x-small","type":"around"}],"size":{"default":"6","isResponsive":true,"large":"5","medium":"6","small":"6"},"sizeClass":"slds-large-size_5-of-12 slds-medium-size_6-of-12 slds-small-size_6-of-12 slds-size_6-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-around_x-small ","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"around:x-small","size":"x-small","type":"around"}],"size":{"default":"6","isResponsive":true,"large":"5","medium":"6","small":"6"},"sizeClass":"slds-large-size_5-of-12 slds-medium-size_6-of-12 slds-small-size_6-of-12 slds-size_6-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}}}],"type":"block"},{"children":[{"class":"slds-col ","element":"baseInputElement","elementLabel":"Block-1-Block-1-Block-1-Number-0","key":"element_element_element_element_block_2_0_block_1_0_block_1_0_baseInputElement_0_0","name":"Number","parentElementKey":"element_element_element_block_2_0_block_1_0_block_1_0","property":{"card":"{card}","propertyObj":{"customProperties":[{"id":0,"label":"name","value":"customDiscoutField"},{"id":1,"label":"data-field","value":"recurring"}],"imask":"","label":"{Label.PCValue}"},"record":"{record}","type":"number"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"value","container":{"class":""},"customClass":"value","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"value","container":{"class":""},"customClass":"value","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}}}],"type":"element"},{"class":"slds-col ","element":"outputField","elementLabel":"Block-1-Block-1-Block-1-Text-1","key":"element_element_element_element_block_2_0_block_1_0_block_1_0_outputField_1_0","name":"Text","parentElementKey":"element_element_element_block_2_0_block_1_0_block_1_0","property":{"card":"{card}","data-conditions":{"group":[],"id":"state-condition-object","isParent":true},"mergeField":"%3Cdiv%3E%7Brecurringvalueicon%7D%3C/div%3E","record":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"custom_icon","container":{"class":""},"customClass":"custom_icon","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"custom_icon","container":{"class":""},"customClass":"custom_icon","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}}}],"type":"text"}],"class":"slds-col ","element":"block","elementLabel":"Block-1-Block-1-clone-0-Block-1","key":"element_element_element_block_2_0_block_1_0_block_1_0","name":"Block","parentElementKey":"element_element_block_2_0_block_1_0","property":{"card":"{card}","collapsedByDefault":false,"collapsible":false,"label":"Block","record":"{record}"},"size":{"default":"6","isResponsive":true,"large":"3","medium":"6","small":"6"},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-around_x-small relative","container":{"class":""},"customClass":"relative","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"around:x-small","size":"x-small","type":"around"}],"size":{"default":"6","isResponsive":true,"large":"3","medium":"6","small":"6"},"sizeClass":"slds-large-size_3-of-12 slds-medium-size_6-of-12 slds-small-size_6-of-12 slds-size_6-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-around_x-small relative","container":{"class":""},"customClass":"relative","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"around:x-small","size":"x-small","type":"around"}],"size":{"default":"6","isResponsive":true,"large":"3","medium":"6","small":"6"},"sizeClass":"slds-large-size_3-of-12 slds-medium-size_6-of-12 slds-small-size_6-of-12 slds-size_6-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}}}],"type":"block"},{"children":[{"class":"slds-col ","element":"childCardPreview","elementLabel":"Block-1-Block-1-clone-0-Block-2-FlexCard-0","key":"element_element_element_element_block_2_0_block_1_0_block_2_0_childCardPreview_0_0","name":"FlexCard","parentElementKey":"element_element_element_block_2_0_block_1_0_block_2_0","property":{"cardName":"cpqTimePlan","cardNode":"","isChildCardTrackingEnabled":false,"recordId":"{recordId}","selectedState":"Active"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"sizeClass":"slds-size_12-of-12"},"type":"element"}],"class":"slds-col ","element":"block","elementLabel":"Block-1-Block-1-clone-0-Block-2","key":"element_element_element_block_2_0_block_1_0_block_2_0","name":"Block","parentElementKey":"element_element_block_2_0_block_1_0","property":{"card":"{card}","collapsedByDefault":false,"collapsible":false,"label":"Block","record":"{record}"},"size":{"default":"6","isResponsive":true,"large":"4","medium":"6","small":"6"},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"6","isResponsive":true,"large":"4","medium":"6","small":"6"},"sizeClass":"slds-large-size_4-of-12 slds-medium-size_6-of-12 slds-small-size_6-of-12 slds-size_6-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"6","isResponsive":true,"large":"4","medium":"6","small":"6"},"sizeClass":"slds-large-size_4-of-12 slds-medium-size_6-of-12 slds-small-size_6-of-12 slds-size_6-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}}}],"type":"block"}],"class":"slds-col ","element":"block","elementLabel":"Block-2-Block-2","key":"element_element_block_2_0_block_1_0","name":"Block","parentElementKey":"element_block_2_0","property":{"card":"{card}","collapsedByDefault":false,"collapsible":false,"data-conditions":{"group":[{"field":"recurringcheck","hasMergeField":false,"id":"state-new-condition-9","operator":"==","type":"custom","value":"true"}],"id":"state-condition-object","isParent":true},"label":"Block","record":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"class":"slds-p-around_x-small","padding":[{"size":"x-small","type":"around"}],"sizeClass":"slds-size_12-of-12"},"type":"block"}],"class":"slds-col ","element":"block","elementLabel":"Block-2","name":"Block","property":{"card":"{card}","collapsedByDefault":false,"collapsible":false,"label":"Block","record":"{record}"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-around_x-small field-row","container":{"class":""},"customClass":"field-row","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"around:x-small","size":"x-small","type":"around"}],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-p-around_x-small field-row","container":{"class":""},"customClass":"field-row","elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[{"label":"around:x-small","size":"x-small","type":"around"}],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}}}],"type":"block"}]}},"conditions":{"group":[],"id":"state-condition-object","isParent":true},"definedActions":{"actions":[]},"documents":[],"fields":[],"isSmartAction":false,"name":"Active","omniscripts":[],"smartAction":{},"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"slds-card slds-p-around_x-small slds-m-around_none cpq-create_discount-amount_details","container":{"class":"slds-card"},"customClass":"cpq-create_discount-amount_details","elementStyleProperties":{},"inlineStyle":"text-align: left;","margin":[{"label":"around:none","size":"none","type":"around"}],"padding":[{"label":"around:x-small","size":"x-small","type":"around"}],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     : #ccc 1px solid; \n         text-align: left;","text":{"align":"","color":""}}}],"theme":"slds","title":"cpqCreateCustomDiscountAmountDetails","Id":"a3gHr000001Tb3EQAS","vlocity_cmt__GlobalKey__c":"cpqCreateCustomDiscountAmountDetails/Vlocity/1/1623843693515"};
  export default definition