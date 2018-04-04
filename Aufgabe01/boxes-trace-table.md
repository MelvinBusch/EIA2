# Boxes Trace Table

## Code aus der Aufgabe
```typescript
namespace Boxes {
    let n: number = 5;
    let c: string;
    let x: number = 0;
    let y: number = 0;

    for (let i: number = 0; i < n; i++) {
        y += (i == 2) ? 20 : 50;
        x = (x + 170) % 400;
        switch (i) {
            case 0:
                c = "#ff0000";
                break;
            case 1:
            case 4:
                c = "#00ff00";
                break;
            case 3:
                continue;
            default:
                c = "#0000ff";
        }
        for (let a: number = 50; a > 0; a -= 20) {
            placeDiv(c, x, y, a, a);
            if (i == 4)
                break;
        }
    }
    
    function placeDiv(_color: string, _x: number, _y: number, _width: number, _height: number): void {
        let div: HTMLDivElement = document.createElement("div");
        document.body.appendChild(div);
        
        let s: CSSStyleDeclaration = div.style;
        s.border = "thin solid black";
        s.position = "absolute";
        s.backgroundColor = _color;
        s.width = _width + "px";
        s.height = _height + "px";
        s.left = _x + "px";
        s.top = _y + "px";
    }
}
```

## Trace Table: Hauptprogramm

|Zeile|Kommentar|`i : number`|`c : string`|`x : number`|`y : number`|`a : number`|
|--|--|--|--|--|--|--|
|2|Variable `n = 5`|
|4|Wertzuweisung||`0`|
|5|Wertzuweisung|||`0`|
|7|Schleife `0 < 5`|`0`|
|8|`0 ≠ 2 => false`||||`50`|
|9|`170 % 400`|||`170`|
|10|switch `case 0`||`#ff0000`|
|23|Schleife `50 > 0`|||||`50`|
|24|Aufruf `placeDiv()`||`#ff0000`|`170`|`50`|`50`|
|25|`false`||||||
|23|Schleife `30 > 0` |||||`30`|
|24|Aufruf `placeDiv()`||`#ff0000`|`170`|`50`|`30`|
|25|`false`||||||
|23|Schleife `10 > 0` |||||`10`|
|24|Aufruf `placeDiv()`||`#ff0000`|`170`|`50`|`10`|
|25|`false`||||||
|23|Schleife `-10 !> 0` |||||`-10`|
|--|--|--|--|--|--|--|
|7|`i` increment `1 < 5`|`1`|
|8|`1 ≠ 2 => false`||||`100`|
|9|`340 % 400`|||`340`|
|10|switch `case 1`||`#00ff00`|
|23|Schleife `50 > 0`|||||`50`|
|24|Aufruf `placeDiv()`||`#00ff00`|`340`|`100`|`50`|
|25|`false`||||||
|23|Schleife `30 > 0` |||||`30`|
|24|Aufruf `placeDiv()`||`#00ff00`|`340`|`100`|`30`|
|25|`false`||||||
|23|Schleife `10 > 0` |||||`10`|
|24|Aufruf `placeDiv()`||`#00ff00`|`340`|`100`|`10`|
|25|`false`||||||
|23|Schleife `-10 !> 0` |||||`-10`|
|--|--|--|--|--|--|--|
|7|`i` increment `2 < 5`|`2`|
|8|`2 = 2 => true`||||`120`|
|9|`510 % 400`|||`120`|
|10|switch `default`||`#0000ff`|
|23|Schleife `50 > 0`|||||`50`|
|24|Aufruf `placeDiv()`||`#0000ff`|`120`|`120`|`50`|
|25|`false`||||||
|23|Schleife `30 > 0` |||||`30`|
|24|Aufruf `placeDiv()`||`#0000ff`|`120`|`120`|`30`|
|25|`false`||||||
|23|Schleife `10 > 0` |||||`10`|
|24|Aufruf `placeDiv()`||`#0000ff`|`120`|`120`|`10`|
|25|`false`||||||
|23|Schleife `-10 !> 0` |||||`-10`|
|--|--|--|--|--|--|--|
|7|`i` increment `3 < 5`|`3`|
|8|`3 ≠ 2 => false`||||`170`|
|9|`290 % 400`|||`290`|
|10|switch `continue` `case` abbruch||`undefined`|
|23|Schleife `50 > 0`|||||`50`|
|24|Aufruf `placeDiv()`||`undefined`|`290`|`170`|`50`|
|25|`false`||||||
|23|Schleife `30 > 0` |||||`30`|
|24|Aufruf `placeDiv()`||`undefined`|`290`|`170`|`30`|
|25|`false`||||||
|23|Schleife `10 > 0` |||||`10`|
|24|Aufruf `placeDiv()`||`undefined`|`290`|`170`|`10`|
|25|`false`||||||
|23|Schleife `-10 !> 0` |||||`-10`|
|--|--|--|--|--|--|--|
|7|`i` increment `4 < 5`|`4`|
|8|`4 ≠ 2 => false`||||`220`|
|9|`460 % 400`|||`60`|
|10|switch `case 4`||`#00ff00`|
|23|Schleife `50 > 0`|||||`50`|
|24|Aufruf `placeDiv()`||`#00ff00`|`60`|`220`|`50`|
|25|`true` Schleifen abbruch||||||
|--|--|--|--|--|--|--|
|7|`i` increment `5 !< 5`|`5`|
||Programm Ende!|


## Trace Table: `placeDiv()`
|Zeile|Kommentar|`_color : string`|`_x : number`|`_y : number`|`_width : number`|`_height : number`|
|--|--|--|--|--|--|--|
|31|Parameter definieren|`#ff0000`|`170`|`50`|`50`|`50`|
|32|`div` Element erzeugen||||||
|33|Element zu `body` hinzufügen||||||
|35|`div` Element Styles zuweisen||||||
|--|--|--|--|--|--|--|
|31|Parameter definieren|`#ff0000`|`170`|`50`|`30`|`30`|
|32|`div` Element erzeugen||||||
|33|Element zu `body` hinzufügen||||||
|35|`div` Element Styles zuweisen||||||
|--|--|--|--|--|--|--|
|31|Parameter definieren|`#ff0000`|`170`|`50`|`10`|`10`|
|32|`div` Element erzeugen||||||
|33|Element zu `body` hinzufügen||||||
|35|`div` Element Styles zuweisen||||||
|--|--|--|--|--|--|--|
|31|Parameter definieren|`#00ff00`|`340`|`100`|`50`|`50`|
|32|`div` Element erzeugen||||||
|33|Element zu `body` hinzufügen||||||
|35|`div` Element Styles zuweisen||||||
|--|--|--|--|--|--|--|
|31|Parameter definieren|`#00ff00`|`340`|`100`|`30`|`30`|
|32|`div` Element erzeugen||||||
|33|Element zu `body` hinzufügen||||||
|35|`div` Element Styles zuweisen||||||
|--|--|--|--|--|--|--|
|31|Parameter definieren|`#00ff00`|`340`|`100`|`10`|`10`|
|32|`div` Element erzeugen||||||
|33|Element zu `body` hinzufügen||||||
|35|`div` Element Styles zuweisen||||||
|--|--|--|--|--|--|--|
|31|Parameter definieren|`#0000ff`|`120`|`120`|`50`|`50`|
|32|`div` Element erzeugen||||||
|33|Element zu `body` hinzufügen||||||
|35|`div` Element Styles zuweisen||||||
|--|--|--|--|--|--|--|
|31|Parameter definieren|`#0000ff`|`120`|`120`|`30`|`30`|
|32|`div` Element erzeugen||||||
|33|Element zu `body` hinzufügen||||||
|35|`div` Element Styles zuweisen||||||
|--|--|--|--|--|--|--|
|31|Parameter definieren|`#0000ff`|`120`|`120`|`10`|`10`|
|32|`div` Element erzeugen||||||
|33|Element zu `body` hinzufügen||||||
|35|`div` Element Styles zuweisen||||||
|--|--|--|--|--|--|--|
|31|Parameter definieren => Fehler|`undefined`|`290`|`170`|`50`|`50`|
|--|--|--|--|--|--|--|
|31|Parameter definieren => Fehler|`undefined`|`290`|`170`|`30`|`30`|
|--|--|--|--|--|--|--|
|31|Parameter definieren => Fehler|`undefined`|`290`|`170`|`10`|`10`|
|--|--|--|--|--|--|--|
|31|Parameter definieren|`#00ff00`|`220`|`60`|`50`|`50`|
|32|`div` Element erzeugen||||||
|33|Element zu `body` hinzufügen||||||
|35|`div` Element Styles zuweisen||||||

## Skizze



## Webversion