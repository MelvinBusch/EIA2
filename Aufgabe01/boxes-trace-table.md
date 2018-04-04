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
|10|switch `case 0`||`"#ff0000"`|
|23|Schleife `50 > 0`|||||`50`|
|24|Aufruf `placeDiv()`||`#ff0000`|`170`|`50`|`50`|
|25|`false`||||||
|23|Schleife `a - 20` `30 > 0` |||||`30`|





## Trace Table: `placeDiv()`
