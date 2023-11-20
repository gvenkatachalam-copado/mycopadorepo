let definition =
      {"dataSource":{"contextVariables":[],"orderBy":{"isReverse":false,"name":""},"type":"IntegrationProcedures","value":{"dsDelay":"","inputMap":{"attributes":"{Parent.filterQuery}","cartId":"{Parent.cartId}","catalogId":"{Parent.typeId}","fields":"","offerType":"{Parent.typeId}","offsetSize":"0","pagesize":"{Parent.pagesize}","qualifiedFilter":"{Parent.category}","query":"{Parent.query}"},"ipMethod":"CPQ_ProductPromotionContainer","resultVar":"[\"response\"]","vlocityAsync":false}},"enableLwc":true,"events":[{"actionData":{"card":"{card}","draggable":true,"isOpen":false,"key":"1625930837519-8a68rxzv9","label":"Action","stateAction":{"eventName":"setValues","fieldValues":[{"fieldName":"result","fieldValue":"{action.result}"}],"id":"flex-action-1617483345766","type":"cardAction"}},"actionList":[{"card":"{card}","draggable":true,"isOpen":false,"key":"1628306426987-dmg6ib5rg","label":"Action","stateAction":{"eventName":"setValues","fieldValues":[{"fieldName":"result","fieldValue":"{action.result}"}],"id":"flex-action-1625930870086","type":"cardAction"}}],"channelname":"cpq_{recordId}","displayLabel":"cpq_{recordId}:cpq_load_more_promotions_browse","element":"action","eventLabel":"pubsub","eventname":"cpq_load_more_promotions_browse","eventtype":"pubsub","key":"event-0","recordIndex":"0"},{"actionData":{"card":"{card}","draggable":true,"isOpen":false,"key":"1625930837519-fpnkks6wg","label":"Action","stateAction":{"eventName":"setValues","fieldValues":[{"fieldName":"result","fieldValue":"{action.result}"}],"id":"flex-action-1617145869879","type":"cardAction"}},"actionList":[{"card":"{card}","draggable":false,"isOpen":true,"key":"1628306426987-j2oywjptv","label":"Action","stateAction":{"eventName":"setValues","fieldValues":[{"fieldName":"result","fieldValue":"{action.result}"}],"id":"flex-action-1628306434115","type":"cardAction"}}],"channelname":"cpq_{recordId}","displayLabel":"cpq_{recordId}:cpq_load_more_products_browse","element":"action","eventLabel":"pubsub","eventname":"cpq_load_more_products_browse","eventtype":"pubsub","key":"event-1","recordIndex":"0"},{"actionList":[{"card":"{card}","draggable":true,"isOpen":false,"key":"1628306426987-jq6fddsmj","label":"Action","stateAction":{"eventName":"cpqutils_{recordId}","extraParams":{"actionsname":"addtocart","checkboxPhase":"{action.phase}","checked":"{action.checked}","eventname":"cpq_select_multiple_products","offerType":"Products","phase":"{Parent.phase}","record":"{record}","selectedProductsIdsBrowse":"{Session.selectedProductsIdsBrowse}","selectedProductsIdsCart":"{Session.selectedProductsIdsCart}","selectedProductsNamesBrowse":"{Session.selectedProductsNamesBrowse}","selectedProductsNamesCart":"{Session.selectedProductsNamesCart}","selectedRecord":"{action.record}","utilMethod":"selectRecordFunctionality"},"hasExtraParams":true,"id":"flex-action-1628283096040","message":"cpq_ui_event","subType":"PubSub","type":"Event"}}],"channelname":"cpq_{recordId}","displayLabel":"cpq_{recordId}:cpq_select_product","element":"action","eventLabel":"pubsub","eventname":"cpq_select_product","eventtype":"pubsub","key":"event-2","recordIndex":"0"},{"actionList":[{"card":"{card}","draggable":true,"isOpen":false,"key":"1628306426987-ai47r779o","label":"Action","stateAction":{"eventName":"setValues","fieldValues":[{"fieldName":"result","fieldValue":"{action.result}"},{"fieldName":"Session.selectedProductsIdsBrowse","fieldValue":"{action.selectedProductsIdsBrowse}"},{"fieldName":"Session.selectedProductsIdsCart","fieldValue":"{action.selectedProductsIdsCart}"},{"fieldName":"Session.selectedProductsNamesBrowse","fieldValue":"{action.selectedProductsNamesBrowse}"},{"fieldName":"Session.selectedProductsNamesCart","fieldValue":"{action.selectedProductsNamesCart}"}],"id":"flex-action-1628284795148","type":"cardAction"}}],"channelname":"cpq_{recordId}","displayLabel":"cpq_{recordId}:cpq_update_products_browse","element":"action","eventLabel":"pubsub","eventname":"cpq_update_products_browse","eventtype":"pubsub","key":"event-3","recordIndex":"0"},{"actionList":[{"card":"{card}","draggable":true,"isOpen":false,"key":"1628306426987-2o1wyw9sw","label":"Action","stateAction":{"eventName":"setValues","fieldValues":[{"fieldName":"Session.selectedProductsIdsBrowse","fieldValue":"[]"},{"fieldName":"Session.selectedProductsIdsCart","fieldValue":"[]"},{"fieldName":"Session.selectedProductsNamesBrowse","fieldValue":"[]"},{"fieldName":"Session.selectedProductsNamesCart","fieldValue":"[]"}],"id":"flex-action-1628287790582","type":"cardAction"}}],"channelname":"cpq_{recordId}","displayLabel":"cpq_{recordId}:cpq_remove_multiselect_incontainer_browse","element":"action","eventLabel":"pubsub","eventname":"cpq_remove_multiselect_incontainer_browse","eventtype":"pubsub","key":"event-4","recordIndex":"0"},{"actionList":[{"card":"{card}","draggable":true,"isOpen":false,"key":"1628306426987-xmsmlhqbo","label":"Action","stateAction":{"eventName":"cpqutils_{recordId}","extraParams":{"phase":"Browse","record":"{record}","utilMethod":"unSelectRecords"},"hasExtraParams":true,"id":"flex-action-1628292808877","message":"cpq_ui_event","subType":"PubSub","type":"Event"}}],"channelname":"cpq_{recordId}","displayLabel":"cpq_{recordId}:cpq_uncheck_all_products_browse","element":"action","eventLabel":"pubsub","eventname":"cpq_uncheck_all_products_browse","eventtype":"pubsub","key":"event-5","recordIndex":"0"},{"actionList":[{"card":"{card}","draggable":true,"isOpen":false,"key":"1628306426987-z9xrb566g","label":"Action","stateAction":{"eventName":"cpqutils_{recordId}","extraParams":{"actionsname":"addtocart","checkboxPhase":"{action.phase}","checked":"{action.checked}","eventname":"cpq_select_multiple_products","offerType":"Products","phase":"{Parent.phase}","record":"{record}","utilMethod":"selectAllFunctionality"},"hasExtraParams":true,"id":"flex-action-1628300580075","message":"cpq_ui_event","subType":"PubSub","type":"Event"}}],"channelname":"cpq_{recordId}","displayLabel":"cpq_{recordId}:cpq_select_all_products_checkbox","element":"action","eventLabel":"pubsub","eventname":"cpq_select_all_products_checkbox","eventtype":"pubsub","key":"event-6","recordIndex":"0"},{"actionList":[{"card":"{card}","draggable":true,"isOpen":false,"key":"1628306426987-95upme0nl","label":"Action","stateAction":{"eventName":"setValues","fieldValues":[{"fieldName":"Session.isSelectAll","fieldValue":"{action.checked}"}],"id":"flex-action-1628301290608","type":"cardAction"}}],"channelname":"cpq_{recordId}","displayLabel":"cpq_{recordId}:cpq_mark_select_all_checkbox_browse","element":"action","eventLabel":"pubsub","eventname":"cpq_mark_select_all_checkbox_browse","eventtype":"pubsub","key":"event-7","recordIndex":"0"}],"isFlex":true,"listenToWidthResize":false,"lwc":{"DeveloperName":"cfCpqProductsPromotionsContainer_2_Vlocity","Id":"0RbHr000000jndgCA4","ManageableState":"unmanaged","MasterLabel":"cfCpqProductsPromotionsContainer_2_Vlocity","NamespacePrefix":"vlocity_cmt"},"multilanguageSupport":true,"selectableMode":"Multi","sessionVars":[{"name":"selectedProductsIdsBrowse","val":"[]"},{"name":"selectedProductsNamesBrowse","val":"[]"},{"name":"selectedProductsIdsCart","val":"[]"},{"name":"selectedProductsNamesCart","val":"[]"},{"name":"isSelectAll","val":"false"}],"states":[{"actions":[],"childCards":["cpqPromotions"],"components":{"layer-0":{"children":[{"class":"slds-col ","element":"childCardPreview","elementLabel":"FlexCard-0","name":"FlexCard","property":{"cardName":"cpqPromotions","cardNode":"{record}","isChildCardTrackingEnabled":false,"parentAttribute":{"cartId":"{Parent.cartId}","pagesize":"{Parent.pagesize}","phase":"{Parent.phase}","qualifiedFilter":"{Parent.category}","query":"{Parent.query}","view":"{Parent.view}"},"recordId":"{recordId}","selectedState":"Browse"},"size":{"default":"12","isResponsive":false},"stateIndex":0,"styleObject":{"sizeClass":"slds-size_12-of-12"},"type":"element"}]}},"conditions":{"group":[{"field":"Parent.typeId","id":"state-condition-1","operator":"==","type":"custom","value":"-2"}],"id":"state-condition-object","isParent":true},"definedActions":{"actions":[]},"documents":[],"fields":[],"isSmartAction":false,"name":"Promotions","omniscripts":[],"smartAction":{},"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}}},{"actions":[],"childCards":["cpqProductView"],"components":{"layer-0":{"children":[{"class":"slds-col ","element":"childCardPreview","elementLabel":"FlexCard-0","name":"FlexCard","property":{"cardName":"cpqProductView","cardNode":"{record}","isChildCardTrackingEnabled":false,"parentAttribute":{"attribute":"{Parent.filterQuery}","cartId":"{Parent.cartId}","catalogId":"{Parent.typeId}","isSelectAll":"{Session.isSelectAll}","pagesize":"{Parent.pagesize}","phase":"{Parent.phase}","qualifiedFilter":"{Parent.category}","query":"{Parent.query}","type":"{Parent.type}","view":"{Parent.view}"},"recordId":"{recordId}","selectedState":"Product-View"},"size":{"default":"12","isResponsive":false},"stateIndex":1,"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"cpq_products_promotions_container ","container":{"class":"cpq_products_promotions_container"},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}},"styleObjects":[{"conditionString":"","conditions":"default","draggable":false,"key":0,"label":"Default","name":"Default","styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"cpq_products_promotions_container ","container":{"class":"cpq_products_promotions_container"},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}}}],"type":"element"}]}},"conditions":{"group":[{"field":"Parent.typeId","id":"state-condition-1","operator":"!=","type":"custom","value":"-2"}],"id":"state-condition-object","isParent":true},"definedActions":{"actions":[]},"documents":[],"fields":[],"isSmartAction":false,"name":"Products","omniscripts":[],"smartAction":{},"styleObject":{"background":{"color":"","image":"","position":"","repeat":"","size":""},"border":{"color":"","radius":"","style":"","type":"","width":""},"class":"","container":{"class":""},"elementStyleProperties":{},"inlineStyle":"","margin":[],"padding":[],"size":{"default":"12","isResponsive":false},"sizeClass":"slds-size_12-of-12 ","style":"     : #ccc 1px solid; \n         ","text":{"align":"","color":""}}}],"theme":"slds","title":"cpqProductsPromotionsContainer","Id":"a3gHr000000QgC1QAS","vlocity_cmt__GlobalKey__c":"cpqProductsPromotionsContainer/Vlocity/2/1636346287488"};
  export default definition