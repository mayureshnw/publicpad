import os
import subprocess
import time

cmd = ["mocha", "test/bootstrap.test.js", "test/integration/**/*.test.js"]
directory = os.path.dirname(os.path.abspath(__file__))
while(True):
    try:
        print "================================= TESTING ON ================================="
        os.chdir(directory)
        subprocess.call(cmd)
        time.sleep(5)
    except:
        print "## See You Later ##"
