// To run these tests, see https://github.com/asross/unity_tests

class MetaprogrammableClass extends BaseBehaviour {
  var foo : String;
  function Foo() { return 5; }
  function Bar(n) { return n + 5; }
  function Baz(n, m) { return n + m + 5; }
}

class BaseBehaviourTest extends UnitTest {
  var o;

  function Awake() {
    o = gameObject.AddComponent(MetaprogrammableClass);
  }

  function TestMethod() {
    Assert(o.Method('Foo'));
    Assert(o.Method('Bar'));
    Assert(o.Method('Baz'));
    Assert(!o.Method('Bat'));
  }

  function TestField() {
    Assert(o.Field('foo'));
    Assert(!o.Field('bar'));
  }

  function TestGetAndSet() {
    Assert(!o.foo);
    Assert(!o.Get('foo'));

    o.Set('foo', 'hello world');

    AssertEqual(o.foo, 'hello world');
    AssertEqual(o.Get('foo'), 'hello world');
  }

  function TestCall() {
    AssertEqual(o.Call('Foo'      ), 5);
    AssertEqual(o.Call('Bar', 5   ), 10);
    AssertEqual(o.Call('Baz', 5, 5), 15);
  }
}
