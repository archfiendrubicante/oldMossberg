/*jshint esversion: 6 */

import { Mossberg } from "./module/config.js";
import MossbergItemSheet from "./module/sheets/MossbergItemSheet.js";

Hooks.once("init", function (){
    console.log("Mossberg | Initializing Mossberg System");

    CONFIG.Mossberg = Mossberg;

    Items.unregisterSheet("core", "ItemSheet");
    Items.registerSheet("Mossberg", MossbergItemSheet, {makeDefault: true});
});
