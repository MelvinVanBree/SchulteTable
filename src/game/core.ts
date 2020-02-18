import * as PIXI from 'pixi.js';
import { Config } from 'Game/config';
import { Grid } from "Game/components";
import { resHelper } from "Game/helpers";

export class core {
    private renderer: PIXI.Application;
    private gridContainer: Grid;
    //private grid: Grid;
    constructor(private viewElement: HTMLElement){
        // Set rendering precision
        PIXI.settings.PRECISION_FRAGMENT = PIXI.PRECISION.HIGH;
        this.renderer = new PIXI.Application({ width: resHelper().x, height: resHelper().y, backgroundColor: Config.style.backgroundColor });
        this.gridContainer = new Grid();

        viewElement.appendChild( this.renderer.view );
        this.renderer.stage.addChild(this.gridContainer);
    }

    public start() {
        this.gridContainer.init();
    }
}