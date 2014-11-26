from setuptools import setup, find_packages

setup(name='physindex',
      version='1.0',
      description='a web database of physics variables, equations, and their associations',
      author='Jonathan Goodnow',
      author_email='physindex@gmail.com',
      url='www.physindex.com',
      install_requires=['Django==1.7', 'unipath', 'django-suit', 'django-extensions', 'wikipedia'],
     )
