import numpy as np

def anumpyarray():

    return np.array([0,1,2,3,4.5])

def test_anumpyarray():

    expected = np.array([0,1,2,3,4]).tolist()
    actual = anumpyarray().tolist()

    assert actual == expected
