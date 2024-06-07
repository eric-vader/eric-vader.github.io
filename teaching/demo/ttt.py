X,O,E = 'X','O',' '
SYMBOLS = {X,O}
WINNING_POS = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]]
class TicTacToe(object):
  def __init__(self, Si=[ E ] * 9):
    self.Si = Si
    self.winner = E
  def actions(self):
    e_cis = [ ci for ci, Si_ci in enumerate(self.Si) if Si_ci == E ]
    return [ (ci, y) for y in SYMBOLS for ci in e_cis ]
  def transit(self, ai):
    ci, y = ai
    Si1 = self.Si.copy()
    Si1[ci] = y
    return TicTacToe(Si1)
  def is_terminal(self):
    for a,b,c in WINNING_POS:
      if self.Si[a] in SYMBOLS and self.Si[a] == self.Si[b] and self.Si[b] == self.Si[c]:
        self.winner = self.Si[a]
        return True
    return E not in set(self.Si)
  def utility(self, p=X):
    if self.winner == E:
      return 0
    elif self.winner == p:
      return 1
    else:
      return -1
  def __repr__(self) -> str:
    return '\n'.join([''.join(self.Si[i*3:i*3+3]) for i in range(3)])

s0 = TicTacToe()
a0 = s0.actions()[1]
s1 = s0.transit(a0)
print(s1)

def minimax(state):
  raise NotImplementedError

s = TicTacToe([O,X,E,X,X,O,E,O,E])
print(minimax(s))