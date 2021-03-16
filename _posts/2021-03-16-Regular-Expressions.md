**Regular expressions** 
*(referred to as “regex” for short)* is a sequence of characters that describes or matches a given amount of text. For example, the sequence bob, considered as a regular expression, would match any occurance of the word “bob” inside of another text.
<p style="font-family: monospace, serif; font-size:15pt">

Regex have both literal characters and meta characters.<br>
In bob, all three characters are literal, i.e. the *“b”* wants to match a “b”, the “o” an “o”, etc. 
<br>
We might also have the regular expression:  
<br>
^bob
<br>
In this case, the ^ is a meta character, i.e. it does not want to match the character “^”, but instead indicates the “beginning of a line.” In other words the regex above would find a match in:  
<br>
bob goes to the park.  
<br>
but would not find a match in:  
<br>
jill and bob go to the park.  
</p>

Here are a few common meta-characters 

Single Character Metacharacters:

```
.     any one character
\d    any digit from 0 to 9
\w    any word character (a-z,A-Z,0-9)
\W    any non-word character
\s    any whitespace character
      (tab, new line, form feed, end of line, carriage return)
\S    any non whitespace character

```

Position Metacharacters:

```

^     beginning of line
$     end of line
\b    word boundary
\B    a non word boundary

```

Quantifiers (refer to the character that precedes it):

```

?         appearing once or not at all
*         appearing zero or more times
+         appearing one or more times
{min,max} appearing within the specified range

```
 
![](https://img.shields.io/badge/Book-Recommended-orange)  
[<span style="color:red">*Mastering Regular Expressions by Jeffrey Friedl*</span>](http://regex.info/)