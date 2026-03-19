"""Allow running as `python -m paperclaw` or `python -m researchclaw`."""

import sys
from researchclaw.cli import main

sys.exit(main())
