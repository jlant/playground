def attach_data(func):
    func.data = 3  # create a new attribute with a value to the function object
    return func

# mutate the add function by attaching a data attribute to the function object called add
@attach_data
def add(x, y):
    return x + y

print("Calling add normally with 2, 3 results in: {}".format(add(2, 3)))

print("The decorator added a new attribute to add function called data with value: {}".format(add.data))

def add_by(x):
    def inner(y):
        return x + y
    return inner

add1 = add_by(1)  # add1 is the function called inner
print("add1 is the function called inner for add1(4) will return 5: {}".format(add1(4)))

print("since add has an embedded function, then add_by(5)(10) returns 15: {}".format(add_by(5)(10)))
