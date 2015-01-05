json.extract!(
	request,
	:id,
	:name,
	:description
)

requestable = request.requestable
json.requestable requestable