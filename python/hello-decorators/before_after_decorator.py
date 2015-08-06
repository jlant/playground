def print_call(func):
    def inner(*args, **kwargs):
        print("calling {0} with {1} {2}".format(func.__name__, args, kwargs))
        result = func(*args, **kwargs)
        print("result was {0}".format(result))
        return result
    return inner

@print_call
def incr(x):
    return x + 1

val = incr(4)  # calling incr with args -> (4,) and kwargs -> {};

print(val)
