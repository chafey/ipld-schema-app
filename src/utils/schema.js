const schema = `advanced FunkyBytes

#comment 
advanced FunkyVector

type MyFunkyBytes bytes representation advanced FunkyBytes

type MyFunkyVector [&MyFunkyBytes] representation advanced FunkyVector

type ADLExample struct {
	fooField optional {String:MyFunkyBytes} (rename "foo_field")
	barField nullable {String:String}
	bazField {String : nullable MyFunkyBytes}
	wozField {String:[nullable String]}
	boomField &ExampleWithNullable
  funkyField MyFunkyVector
} representation map`

export default schema