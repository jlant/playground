from flask import Flask, render_template, jsonify

app = Flask(__name__)

@app.route("/")
def index():
    return "Index Page"

# render the template html page and allow 2 different pages to be displayed: /hello/ will render Hello World; /hello/Jeremiah will render Hello Jeremiah
@app.route("/hello/")
@app.route("/hello/<name>")
def hello(name=None):
    return render_template("hello.html", name=name)

# variable <username> allows for the url to include a variable
@app.route("/user/<username>")
def show_user_profile(username):
    return "User {}".format(username)

# converter that takes a post_id variable and converts it to an integer
@app.route("/post/<int:post_id>")
def show_post(post_id):
    return "Post {}".format(post_id)

# trailing slash indicates projects is like a directory
@app.route("/projects/")
def projects():
    return "Projects page"

# no trailing slash indicates projects is like a pathname to a file
@app.route("/about")
def about():
    return "About page"

# return a piece of data in json format
@app.route("/somedata")
def temperatures():
    mean_temps = {"January": 25,
                  "February": 20,
                  "March": 45,
                  "April": 52,
                  "May": 66,
                  "June": 70}
    return jsonify(mean_temps)

if __name__ == "__main__":
    app.run(debug=True)
