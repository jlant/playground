nums = [1, 2, 3, 4, 5]

# list comprehension
squares1 = [num * num for num in nums]
print(squares1)

# generator comprehension
squares2 = (num * num for num in nums)
print(next(squares2))
print(next(squares2))
#for square in squares2:
#    print(square)

# using lists
def gen_squares1(nums):
    results = []
    for num in nums:
        results.append(num * num)
    return results

# using generators
def gen_squares2(nums):
    for num in nums:
        yield num * num



