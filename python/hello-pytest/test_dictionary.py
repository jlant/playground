def adictionary():

    return {"hello": "world",
            "x": 1,
            "y": 4.5,
            "z": [0,1,2,3]}

def test_adictionary():

    expected = {"hello": "world",
                "x": 1,
                "y": 4.5,
                "z": [0,1,2,3,4],
                "a": "something"}

    assert adictionary() == expected
