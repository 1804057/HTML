CSS is used to define styles for your web pages, including the design, layout, and variations in display for different devices and screen sizes.

## CSS Syntax
![CSS structure](cssimages/Capture.png)  
Here,
- The selector points to the HTML element you want to style.
- The declaration block contains one or more declarations separated by semicolons.
- Each declaration includes a CSS property name and a value, separated by a colon.
- Multiple CSS declarations are separated with semicolons, and declaration blocks are surrounded by curly braces.

## CSS Selectors
- Select with element
- Select with id
- Select with class
- Select with the element class combination

<div>
  <div>
    <h3>HTML Code</h3>
    <pre>
      &lt;body&gt;
      &lt;h1&gt;Hello to CSS&lt;/h1&gt;
      &lt;p&gt;Every paragraph will be affected by the style.&lt;/p&gt;
      &lt;p id="para1"&gt;This is Para 1 id.&lt;/p&gt;
      &lt;p class="center"&gt;This para has center class.&lt;/p&gt;
      &lt;p class="large"&gt;All para with class large will be large&lt;/p&gt;
      &lt;div class="large"&gt;Any other element with class large won't be large..&lt;/div&gt;
      &lt;/body&gt;
    </pre>
    <h3>CSS Code</h3>
    <pre>
    p {
        background-color: aqua;
    }
    #para1{
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    }
    .center{
        text-align: center;
    }
    p.large{
        font-size: 40px;
    }
    </pre>
  </div>
  <div>
    <h3>Output</h3>
    <img src="./cssimages/csssyntax.png">
  </div>
</div>
