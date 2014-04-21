import Queue

class SmartPQ(Queue.PriorityQueue):
    """ Like a normal priority queue, but we can check if something is already
        in the queue efficiently by storing the items in a set """

    def __init__(self):
        Queue.PriorityQueue.__init__(self)
        self.all_elements = set()

    def put(self, item, block=True, timeout=None):
        self.all_elements.add(item[1])
        Queue.PriorityQueue.put(self, item, block, timeout)
        return self

    def has_value(self, element):
        """ only pass me the value, not the priority! """
        if element in self.all_elements: return True
        return False

    def ordered_list(self):
        """ This will empty the queue. """
        isize = self.qsize()
        return [self.get()[1] for _ in xrange(isize)]