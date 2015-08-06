import json

def as_json(func):
    def inner(*args, **kwargs):
        result = func(*args, **kwargs)
        return json.dumps(result)
    return inner

@as_json
def func(x, y):
    return {"result": x + y}

# func(3, 4) -> "{result: 7}"
print("calling func with decorator that serializes the resulting dictionary returned by func to a json object: {}".format(func(3, 4)))
