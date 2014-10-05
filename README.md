# Unity Metaprogramming

This is a very basic library to make some of .NET metaprogramming methods more accessible in the context of Unity3D. It makes it easy and syntactically pleasant to get/set fields and call methods. It is not a full metaprogramming framework, it doesn't allow for dynamic definitions of classes or methods, but that might be for the better.

### Basic Usage

Include `BaseBehaviour.js` somewhere in your project. Then, make your Unity classes inherit from it instead of `MonoBehaviour`. Then feel free to invoke methods using strings to your heart's content.
