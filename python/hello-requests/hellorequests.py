import requests

url = "http://waterdata.usgs.gov/nwis/dv?cb_00060=on&format=rdb&site_no=03287500&referred_module=sw&period=&begin_date=2014-06-12&end_date=2015-06-12"
filename = "usgs-discharge.txt"

# have requests get the data file
r = requests.get(url)

# save requests content to a file if status is ok
if r.status_code == requests.codes.ok:
    with open(filename, "w") as f:
        f.write(r.text)
        print("Downloaded data and saved as: {}".format(filename))

else:
    r.raise_for_status()

