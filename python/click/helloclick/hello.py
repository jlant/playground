import click

class Config(object):

    def __init__(self):
        self.verbose = False
        self.home_directory = None

pass_config = click.make_pass_decorator(Config, ensure=True)


@click.group()
@click.option("--verbose", is_flag=True)
@click.option("--home-directory", type=click.Path())
@pass_config
def cli(config, verbose, home_directory):
    config.verbose = verbose
    if home_directory is None:
        home_directory = "."
    config.home_directory = home_directory    


@cli.command()
@click.option("--string", default="World",
              help="This is the thing that is greeted.")
@click.option("--repeat", default=1,
              help="This is the number of times to be greeted.")
@click.argument("out", type=click.File("w"), default="-",
              required=False)
@pass_config
def say(config, string, repeat, out):
    """ This script greets you."""

    if config.verbose:
        click.echo("We are in verbose mode")    
    click.echo("Home directory is {}".format(config.home_directory))
    for x in xrange(repeat):
        #click.echo("Hello %s!" % string)
        click.echo("Hello {}!".format(string), file=out)

