from flask import Flask
app = Flask(__name__)

@app.route("/")
def index():
    return "Index Page"

@app.route("/hello")
def hello():
    return "Hello Flask!"

# variable <username> allows for the url to include a variable
@app.route("/user/<username>")
def show_user_profile(username):
    return "User {}".format(username)

# converter that takes a post_id variable and converts it to an integer
@app.route("/post/<int:post_id>")
def show_post(post_id):
    return "Post {}".format(post_id)

if __name__ == "__main__":
    app.run(debug=True)
