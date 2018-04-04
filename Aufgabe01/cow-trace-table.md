# Aufgabe Cows

## Code aus der Aufgabe

```typescript
    namespace Cows {
	    let nums: number[] = [2, 6, 5];
	    for (let i: number = 0; i < nums.length; i++) {
		    let result: string = createCall("m", nums[i]);
		    console.log(result);
		}
		function createCall(start: string, length: number): string {
			for (let k: number = length; k > 0; k--) {
				if (k == 1 || k == length / 2)
					start += "h";
				start += "u";
			}
			return start;
		}
	}
```

## Trace Table: Hauptprogramm

|Zeile|Kommentar|`i : number`|`result : string`|
|--|--|--|--|
|2|`nums=[2,6,5]`|||
|3|Schleife beginnt `0 < 3`|`0`||
|4|Aufruf von `createCall()`||`"muhu"`|
|5|Console: `"muhu"`|||
|--|--|--|--|--|
|3|`i` incr. `1 < 3`|`1`||
|4|Aufruf von `createCall()`||`"muuuhuhu"`|
|5|Console: `"muuuhuhu"`|||
|--|--|--|--|--|
|3|`i` incr. `2 < 3`|`2`||
|4|Aufruf von `createCall()`||`"muuuuhu"`|
|5|Console: `"muuuuhu"`|||
|--|--|--|--|--|
|3|`i` incr. `3 !< 3`|`3`||
||Programm Ende!||||


## Trace Table: `createCall()`

|Zeile|Kommentar|`start : string`|`length : number`|`k : number`|
|--|--|--|--|--|
|8|Parameter definieren|`m`|`2`||
|9|Schleife `2 > 0`|||`2`|
|10|nicht erfüllt `false`||||
|12||`"mu"`|||
|9|`k` decrement `1 > 0`|||`1`|
|10|erfüllt `true`||||
|11||`"muh"`|||
|12||`"muhu"`|||
|9|`k` decrement `0!>0`|||`0`|
|14|Rückgabe von `start`||||
|--|--|--|--|--|
|8|Parameter definieren|`m`|`6`||
|9|Schleife `6 > 0`|||`6`|
|10|`false`||||
|12||`mu`|||
|9|`k` decrement `5 > 0`|||`5`|
|10|`false`||||
|12||`muu`|||
|9|`k` decrement `4 > 0`|||`4`|
|12|`false`|`muuu`|||
|9|`k` decrement `3 > 0`|||`3`|
|10|`true`||||
|12||`muuuhu`|||
|9|`k` decrement `2 > 0`|||`2`|
|10|`false`||||
|12||`muuuhu`|||
|9|`k` decrement `1 > 0`|||`1`|
|10|`true`|`muuuhuh`|||
|12||`muuuhuhu`|||
|9|`k` decrement `0 !> 0`|||`0`|
|14|Rückgabe von `start`||||
|--|--|--|--|--|
|8|Parameter definieren|`m`|`5`||
|9|Schleife `5 > 0`|||`5`|
|10|`false`||||
|12||`mu`|||
|9|`k` decrement `4 > 0`|||`4`|
|12|`false`|`muu`|||
|9|`k` decrement `3 > 0`|||`3`|
|12|`false`|`muuu`|||
|9|`k` decrement `2 > 0`|||`2`|
|10|`false`||||
|12||`muuuu`|||
|9|`k` decrement `1 > 0`|||`1`|
|10|`true`|`muuuuh`|||
|12||`muuuuhu`|||
|9|`k` decrement `0 !> 0`|||`0`|
|14|Rückgabe von `start`||||