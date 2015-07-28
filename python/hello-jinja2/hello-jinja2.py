import jinja2

loader = jinja2.FileSystemLoader("templates")
env = jinja2.Environment(loader=loader)

template = env.get_template("hello-template.html")
rendered_html = template.render(title="Hello Jinja2!", name="Jinja2", item_list=["bananas", "apples", "kale", "almond milk"])

with open("rendered.html", "w") as f:
    f.write(rendered_html)
    print("Wrote rendered.html file")
    print("Check it out in your browser!")
