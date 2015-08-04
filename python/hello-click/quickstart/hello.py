import click

@click.command()
@click.option("--count", default=1, help="Number of greetings.")
@click.option("--name", prompt="Your name", help="The person to greet.")
def hello(count, name):
    """Simple program that greets a NAME a COUNT number of times """
    for x in range(count):
        click.echo("Hello {}!".format(name))

if __name__ == "__main__":
    hello()
