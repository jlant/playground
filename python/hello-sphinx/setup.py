#!/usr/bin/env python
# -*- coding: utf-8 -*-


try:
    from setuptools import setup
except ImportError:
    from distutils.core import setup


with open("README.md") as readme_file:
    readme = readme_file.read()

with open("HISTORY.md") as history_file:
    history = history_file.read().replace(".. :changelog:", "")

requirements = [
    # TODO: put package requirements here
]

test_requirements = [
    # TODO: put package test requirements here
]

setup(
    name="nwispy",
    version="1.0.0",
    description="A Python package that reads and processes data files from the United States Geological Survey (USGS) National Water Information System (NWIS).
",
    long_description=readme + "\n\n" + history,
    author="Jeremiah Lant",
    author_email="jlant@usgs.gov",
    url="https://gitlab.cr.usgs.gov/jlant/nwispy",
    packages=[
        "nwispy",
    ],
    package_dir={"nwispy":
                 "nwispy"},
    include_package_data=True,
    install_requires=requirements,
    license="BSD",
    zip_safe=False,
    keywords="nwispy",
    classifiers=[
        "Development Status :: 2 - Pre-Alpha",
        "Intended Audience :: Developers",
        "License :: OSI Approved :: BSD License",
        "Natural Language :: English",
        "Programming Language :: Python :: 2",
        "Programming Language :: Python :: 2.6",
        "Programming Language :: Python :: 2.7",
        "Programming Language :: Python :: 3",
        "Programming Language :: Python :: 3.3",
        "Programming Language :: Python :: 3.4",
    ],
    test_suite="tests",
    tests_require=test_requirements
)
