class BaseBehaviour extends MonoBehaviour {
  // Extend this class instead of MonoBehaviour in your Unity classes
  // to get access to `Get`, `Set`, and `Call`, so you can invoke
  // methods or access fields dynamically.

  function Field(field : String) {
    return GetType().GetField(field);
  }

  function Method(method : String) {
    return GetType().GetMethod(method);
  }

  function Get(field) {
    return Field(field).GetValue(this);
  }

  function Set(field, value) {
    Field(field).SetValue(this, value);
  }

  // unfortunately, no *arguments in Unityscript.
  // add more lines here if you have a function that requires
  // more than three arguments.
  function Call(method)             { return _call(method, null); }
  function Call(method, a1)         { return _call(method, [a1]); }
  function Call(method, a1, a2)     { return _call(method, [a1, a2]); }
  function Call(method, a1, a2, a3) { return _call(method, [a1, a2, a3]); }

  private function _call(method, argument) {
    return Method(method).Invoke(this, argument);
  }
}
