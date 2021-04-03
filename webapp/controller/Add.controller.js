/*global location */
sap.ui.define([
		"pizza/controller/BaseController",
		"sap/ui/model/json/JSONModel",
		"pizza/model/formatter"
	], function (BaseController, JSONModel, formatter) {
		"use strict";

		return BaseController.extend("pizza.controller.Add", {

			formatter: formatter,

			/* =========================================================== */
			/* lifecycle methods                                           */
			/* =========================================================== */

			onInit : function () {
				
			}
			

		});

	}
);